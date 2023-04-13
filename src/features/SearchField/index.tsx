import { useEffect, useState } from "react";
import ImgButton from "../../components/ImgButton";
import palette from "../../styles/palette";
import { Search, Container } from "./styles";
import { useGetBreedsQuery } from "../api/searchFieldApiSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setBreedId, setSearchValue } from "./searchFieldSlice";
import { RootState } from "../../app/store";

const SearchField = () => {
  const searchValue = useAppSelector(
    (state: RootState) => state.searchField.searchValue
  );
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Search
        value={searchValue}
        type="text"
        placeholder="Search for breeds by name e.g.: Abyssinian, Aegean..."
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      <ImgButton
        icon={"search"}
        dimension={4}
        iconSize={2.5}
        borderRadius={1}
        bgColor={palette.rosesAreRed}
        iconColor={palette.pinkPanter}
      />
    </Container>
  );
};

export default SearchField;
