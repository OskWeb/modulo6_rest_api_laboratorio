import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { CharacterCollectionComponent } from './character-collection.component';
import { useContext } from 'react';
import { SearchContextRickMorty } from '../../core/context/searchContextRickMorty';
import { useCharacterCollection } from './character-collection.hook';
import { useDebounce } from '../../common/utils/useDebounce';

export const CharacterCollectionContainer: React.FC = () => {

  const context = useContext(SearchContextRickMorty);
  const {
    term, modifyTerm,
    currentPage, setCurrentPage,
    flagSearch, setFlagSearch,
  } = context;

  const { characterCollection, loadCharacterCollection } = useCharacterCollection();

  const [count, setCount] = React.useState<number>();

  const navigate = useNavigate();
  const debounceValue = useDebounce(term, 1000);

  React.useEffect(() => {
    loadCharacterCollection(currentPage, flagSearch, debounceValue);

  }, []);

  React.useEffect(() => {
    if (characterCollection !== null) {
      setCount(characterCollection.info.pages);
    }
  }, [characterCollection, debounceValue])

  React.useEffect(() => {
    let flagSearch = false;
    if (debounceValue.length > 0) {
      flagSearch = true;
    } else {
      flagSearch = false;
    }
    loadCharacterCollection(currentPage, flagSearch, debounceValue);
    setFlagSearch(flagSearch);

  }, [debounceValue, flagSearch])

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleChangeGeneral = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setFlagSearch(false);
    loadCharacterCollection(value, false, debounceValue);
  }

  const handleChangeFilter = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setFlagSearch(true);
    loadCharacterCollection(value, true, debounceValue);
  }

  const handleReset = () => {
    setCurrentPage(1);
    modifyTerm("");
    setFlagSearch(false);
  }

  return (
    characterCollection ? (
      <CharacterCollectionComponent
        characterCollection={characterCollection.results}
        onCreateCharacter={handleCreateCharacter}
        onEdit={handleEdit}
        count={count}
        page={currentPage}
        handleChangeFilter={handleChangeFilter}
        handleChangeGeneral={handleChangeGeneral}
        onReset={handleReset}
        term={term}
        flagSearch={flagSearch}
      />
    ) : (
      ""
    )


  );
};
