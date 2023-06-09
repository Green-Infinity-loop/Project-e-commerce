import React, { createContext, useEffect, useState } from "react";

interface LocationContextType {
  setCurrentLoc: React.Dispatch<React.SetStateAction<any>>;
  currentLoc: React.Dispatch<React.SetStateAction<any>>;
}

const LocationContext = createContext<LocationContextType | null>(null);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
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