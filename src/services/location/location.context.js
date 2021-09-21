import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState("null");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    try {
      if (!searchKeyword.length) {
        return;
      }

      const result = await locationRequest(searchKeyword.toLowerCase());
      const transformedLocation = locationTransform(result);
      setIsLoading(false);
      setLocation(transformedLocation);
    } catch (err) {
      setIsLoading(false);
      setError(err);
      console.log("not found");
    }
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
