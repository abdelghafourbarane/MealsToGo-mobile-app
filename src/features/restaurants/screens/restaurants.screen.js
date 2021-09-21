import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/safeArea.component";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { RestaurantContext } from "../../../services/restaurant/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import Search from "../components/search.component";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const CardContainer = styled.View`
  padding-bottom: ${(props) => props.theme.space[3]};
`;

function RestaurantScreen({ navigation }) {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouriteToggled={isToggled}
        onFavouriteToggled={() => setIsToggled(!isToggled)}
      />

      {isToggled && <FavouritesBar favourites={favourites} />}
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size={50}
            animating={true}
            color={Colors.blue600}
          />
        </View>
      ) : (
        <RestaurantList
          data={restaurants}
          keyExtractor={(item) => {
            return item.name;
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", { restaurant: item });
              }}
            >
              <CardContainer>
                <RestaurantInfoCard restaurant={item} />
              </CardContainer>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeArea>
  );
}

export default RestaurantScreen;
