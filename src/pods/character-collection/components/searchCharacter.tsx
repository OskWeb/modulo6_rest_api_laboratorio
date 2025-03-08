import { Button } from "@mui/material";
import React, { useContext } from "react";
import LoopIcon from '@mui/icons-material/Loop';
import { SearchTooltip } from "#common/components/searchTooltip";
import { SearchContextRickMorty } from "../../../core/context/searchContextRickMorty";
import CustomInput from "#common/components/customInput";
import { buttonsContainer, searchContainer } from "../character-collection.styles";

interface SearchInputProps {
  onReset: () => void;
}

export const SearchCharacter: React.FC<SearchInputProps> = ({ onReset }) => {

  const context = useContext(SearchContextRickMorty);
  const { term, modifyTerm } = context;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    modifyTerm(e.target.value);
    console.log(e.target.value);
  }

  const handleReset = () => {
    onReset();
  }

  return (
    <div className={searchContainer}>
      <CustomInput handleInput={handleInput} term={term}></CustomInput>
      <div className={buttonsContainer}>
        <Button variant='contained' color='warning' onClick={handleReset}>
          Reset
          <LoopIcon />
        </Button>
        <SearchTooltip text="Filtrar por los diferentes personajes de la serie" />
      </div>
    </div>

  )

}
