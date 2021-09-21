import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/text.component";
import {
  Icon,
  OpenGroup,
  StateRow,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  StarsGroup,
  Address,
} from "./restaurant-info-card.styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Favourite from "../../../components/favourites/favourite.component";

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "SomeRestaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    place_id = "some_place_id",
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <StateRow>
          <StarsGroup>
            {ratingArray.map((elem, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${place_id}-${index}`}
              />
            ))}
          </StarsGroup>
          <OpenGroup>
            <View style={{ paddingRight: 8 }}>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
            </View>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            <Icon
              source={{
                uri: icon,
              }}
            />
          </OpenGroup>
        </StateRow>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}

export default RestaurantInfoCard;
