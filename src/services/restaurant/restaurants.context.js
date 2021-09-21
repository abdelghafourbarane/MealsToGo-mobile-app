import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useMemo,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const results = await restaurantsRequest(loc);
        const transformedRestaurants = restaurantsTransform(results);
        setIsLoading(false);
        setRestaurants(transformedRestaurants);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
