import * as apiModel from './api/episode-collection.api-model';
import * as viewModel from './episode-collection.vm';

export const mapFromApiToVmInfo = (
  info: apiModel.EpisodeInfoEntityApi
): viewModel.EpisodeInfoEntityVM => ({
  count: info.count,
  pages: info.pages,
  next: info.next,
  prev: info.prev,
});

export const mapFromApiToVmResults = (
  episode: apiModel.EpisodeResultsEntityApi
): viewModel.EpisodeResultsEntityVM => ({
  id: episode.id,
  name: episode.name,
  air_date: episode.air_date,
  episode: episode.episode,
  characters: episode.characters,
  url: episode.url,
  created: episode.created,
});
