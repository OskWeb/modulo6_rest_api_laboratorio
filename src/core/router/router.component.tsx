import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene, LocationCollectionScene, EpisodeCollectionScene } from '#scenes';
import { SearchProviderRickMorty } from '#core/context/searchContextRickMorty';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <SearchProviderRickMorty>
      <HashRouter>
        <Routes>
          <Route
            path={switchRoutes.characterCollection}
            element={<CharacterCollectionScene />}
          />
          <Route
            path={switchRoutes.createCharacter}
            element={<CharacterScene />}
          />
          <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
          <Route
            path={switchRoutes.root}
            element={<Navigate to={switchRoutes.characterCollection} />}
          />
          <Route
            path={switchRoutes.locationCollection}
            element={<LocationCollectionScene />}
          />
          <Route
            path={switchRoutes.episodeCollection}
            element={<EpisodeCollectionScene />}
          />
        </Routes>
      </HashRouter>
    </SearchProviderRickMorty>

  );
};
