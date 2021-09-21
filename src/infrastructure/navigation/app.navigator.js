import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { SafeArea } from "../../components/safeArea.component";
import RestaurantsNavigator from "./restaurants.navigator";
import MapScreen from "../../features/map/screen/map.screen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings screen</Text>
    </SafeArea>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Restaurants") {
              iconName = "md-restaurant";
            } else if (route.name === "Settings") {
              iconName = "md-settings";
            } else if (route.name === "Map") {
              iconName = "md-map";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
