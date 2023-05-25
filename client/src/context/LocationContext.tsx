import React, { createContext, useEffect, useState } from "react";

const LocationContext = createContext(null);

const LocationProvider = ({ children }: { children: React.ReactDOM }) => {
  const [currentLoc, setCurrentLoc] = useState<any>([106.9338801, 47.9238657]);
  console.log("currentLoc Context", currentLoc);

  function getMyLocation() {
    if (typeof window != "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLoc([position.coords.longitude, position.coords.latitude]);
        },
        (error) => {
          console.error("aldaaa", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  useEffect(() => {
    getMyLocation();
  }, []);
  return (
    <LocationContext.Provider value={{ currentLoc, setCurrentLoc }}>
      {children}
    </LocationContext.Provider>
  );
};
export { LocationContext, LocationProvider };
