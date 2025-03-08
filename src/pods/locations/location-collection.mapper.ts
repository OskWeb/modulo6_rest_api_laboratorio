import * as apiModel from './api/location-collection.api-model';
import * as viewModel from './location-collection.vm';

export const mapFromApiToVmInfo = (
  info: apiModel.LocationInfoEntityApi
): viewModel.LocationInfoEntityVM => ({
  count: info.count,
  pages: info.pages,
  next: info.next,
  prev: info.prev,
});

export const mapFromApiToVmResults = (
  location: apiModel.LocationResultsEntityApi
): viewModel.LocationResultsEntityVM => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residents: location.residents,
  url: location.url,
  created: location.created,
});
