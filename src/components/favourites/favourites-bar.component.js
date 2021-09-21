import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";

import { Text } from "../text.component";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";

const CardWrapper = styled(View)`
  padding: 10px;
`;

const Spacer = styled(View)`
  margin-right: ${(props) => props.theme.space[2]};
`;

function FavouritesBar({ favourites }) {
  return (
    <CardWrapper>
      <Text label>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer>
              <CompactRestaurantInfo key={key} restaurant={restaurant} />
            </Spacer>
          );
        })}
      </ScrollView>
    </CardWrapper>
  );
}

export default FavouritesBar;
