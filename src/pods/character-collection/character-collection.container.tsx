import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteCharacter } from './api';
import { CharacterCollectionComponent } from './character-collection.component';
import { useContext } from 'react';
import { SearchContextRickMorty } from '../../core/context/searchContextRickMorty';
import { useCharacterCollection } from './character-collection.hook';
import { useDebounce } from '../../common/utils/useDebounce';

export const CharacterCollectionContainer: React.FC = () => {

  const context = useContext(SearchContextRickMorty);
  const {
    term, modifyTerm,
    loadingRickMorty, setLoadingRickMorty,
    currentPage, setCurrentPage,
    flagSearch, setFlagSearch,
  } = context;

  const { characterCollection, loadCharacterCollection } = useCharacterCollection();

  const [count, setCount] = React.useState<number>();

  const navigate = useNavigate();
  const debounceValue = useDebounce(term, 1000);

  React.useEffect(() => {
    loadCharacterCollection(currentPage, flagSearch, debounceValue, setLoadingRickMorty);

  }, []);

  React.useEffect(() => {
    if (characterCollection !== null) {
      setCount(characterCollection.info.pages);
    }

  }, [characterCollection, debounceValue])

  React.useEffect(() => {
    let flagSearch;
    if (debounceValue.length > 0) {
      flagSearch = true;
    } else {
      flagSearch = false;
    }
    loadCharacterCollection(currentPage, flagSearch, debounceValue, setLoadingRickMorty);
    setFlagSearch(flagSearch);

  }, [debounceValue, flagSearch])

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    // loadCharacterCollection();
  };

  const handleChangeGeneral = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setFlagSearch(false);
    loadCharacterCollection(value, false, debounceValue, setLoadingRickMorty);
  }

  const handleChangeFilter = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setFlagSearch(true);
    loadCharacterCollection(value, true, debounceValue, setLoadingRickMorty);
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
        onDelete={handleDelete}
        count={count}
        page={currentPage}
        handleChangeFilter={handleChangeFilter}
        handleChangeGeneral={handleChangeGeneral}
        onReset={handleReset}
        loading={loadingRickMorty}
        term={term}
        flagSearch={flagSearch}
      />
    ) : (
      ""
    )


  );
};
