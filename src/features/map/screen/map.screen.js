import React, { useContext, useState } from "react";
import MapView from "react-native-maps";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurants.context";

import SearchBar from "../components/search.component";
import MapCalloutComponent from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

function MapScreen({ navigation }) {
  const {
    location: { lat, lng, viewport },
  } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <SearchBar />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() => {
                navigation.navigate("RestaurantDetail", { restaurant });
              }}
            >
              <MapCalloutComponent restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
}

export default MapScreen;
