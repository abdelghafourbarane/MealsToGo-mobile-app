import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export default Search = ({ onFavouriteToggled, isFavouriteToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchBarContainer>
  );
};
