import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVmResults = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
});

export const mapFromApiToVmInfo = (
  info: apiModel.CharactersInfoEntityApi
): viewModel.CharacterInfoEntityVm => ({
  count: info.count,
  pages: info.pages,
  next: info.next,
  prev: info.prev,
});
