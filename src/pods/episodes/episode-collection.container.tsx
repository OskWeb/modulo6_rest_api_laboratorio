import React from "react"
import { EpisodeCollectionComponent } from "./episode-collection.component"
import { useEpisodeCollection } from "./episode-collection.hook"

export const EpisodeCollectionContainer: React.FC = () => {

  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();

  React.useEffect(() => {
    loadEpisodeCollection(1);
  }, []);

  const [count, setCount] = React.useState<number>();

  React.useEffect(() => {
    if (episodeCollection !== null) {
      setCount(episodeCollection.info.pages);
    }
  }, [episodeCollection]);

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    loadEpisodeCollection(value);
  }

  return (
    episodeCollection ? (
      <EpisodeCollectionComponent
        episodeCollection={episodeCollection.results}
        count={count}
        page={currentPage}
        handleChange={handleChange}
      />
    ) : (
      null
    )

  )
}
