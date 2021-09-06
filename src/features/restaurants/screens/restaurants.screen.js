import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/safeArea.component";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const TEST_DATA = [
  { name: 1 },
  { name: 10 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
];

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const CardContainer = styled.View`
  padding-bottom: ${(props) => props.theme.space[3]};
`;

function RestaurantScreen() {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <RestaurantList
        data={TEST_DATA}
        keyExtractor={(item) => item.name}
        renderItem={() => (
          <CardContainer>
            <RestaurantInfoCard />
          </CardContainer>
        )}
      />
    </SafeArea>
  );
}

export default RestaurantScreen;
