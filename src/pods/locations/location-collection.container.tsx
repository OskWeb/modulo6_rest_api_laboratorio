import React from "react"
import { LocationCollectionComponent } from "./location-collection.component"
import { useLocationCollection } from "./location-collection.hook"

export const LocationCollectionContainer: React.FC = () => {

  const { locationCollection, loadLocationCollection } = useLocationCollection();

  React.useEffect(() => {
    loadLocationCollection(1);
  }, []);

  const [count, setCount] = React.useState<number>();

  React.useEffect(() => {
    if (locationCollection !== null) {
      setCount(locationCollection.info.pages);
    }
  }, [locationCollection]);

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    loadLocationCollection(value);
  }

  return (
    locationCollection ? (
      <LocationCollectionComponent
        locationCollection={locationCollection.results}
        count={count}
        page={currentPage}
        handleChange={handleChange}
      />
    ) : (
      null
    )

  )
}
