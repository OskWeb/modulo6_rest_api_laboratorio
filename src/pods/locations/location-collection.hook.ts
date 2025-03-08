import React from 'react';
import { LocationEntityVM } from './location-collection.vm';
import { getLocationCollection } from './api/location-collection.api';
import { mapToCollection } from '#common/mappers';
import {
  mapFromApiToVmInfo,
  mapFromApiToVmResults,
} from './location-collection.mapper';

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] =
    React.useState<LocationEntityVM>(null);

  const loadLocationCollection = (page: number) => {
    getLocationCollection(page).then((data) => {
      setLocationCollection({
        info: mapFromApiToVmInfo(data.info),
        results: mapToCollection(data.results, mapFromApiToVmResults),
      });
    });
  };

  return { locationCollection, loadLocationCollection };
};
