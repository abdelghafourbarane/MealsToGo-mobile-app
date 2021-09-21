import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      })}
    >
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
}

export default RestaurantsNavigator;
