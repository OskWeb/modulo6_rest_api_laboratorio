import React from 'react';
import { EpisodeEntityVM } from './episode-collection.vm';
import { getEpisodeCollection } from './api/episode-collection.api';
import { mapToCollection } from '#common/mappers';
import {
  mapFromApiToVmInfo,
  mapFromApiToVmResults,
} from './episode-collection.mapper';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] =
    React.useState<EpisodeEntityVM>(null);

  const loadEpisodeCollection = (page: number) => {
    getEpisodeCollection(page).then((data) => {
      setEpisodeCollection({
        info: mapFromApiToVmInfo(data.info),
        results: mapToCollection(data.results, mapFromApiToVmResults),
      });
    });
  };

  return { episodeCollection, loadEpisodeCollection };
};
