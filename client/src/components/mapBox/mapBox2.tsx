import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

function MapboxMap() {
  const [map, setMap] = React.useState<mapboxgl.Map>();
  const [currentLoc, setCurrentLoc] = React.useState([106.918162, 47.915596]);
  const [nearestLocation, setNearestLocation] = React.useState({});
  const mapNode = React.useRef(null);

  async function findNearestLocation(long, lat) {
   const res = await axios.get(
      `http://localhost:8080/locations/findnearest?long=${long}&lat=${lat}`
    );
    const data = await res.data;
    setNearestLocation(data);
  }
  console.log('nearest loc:', nearestLocation)



  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window !== "undefined" && navigator.geolocation) {
      // Your implementation here
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoibXVuZ3Vuc2hhZ2FpIiwiYSI6ImNsaHUwMjhtNDBnZ3gzdGw5MXhxcGhoOXUifQ.7rdAZiweqotAkzdUXLAl5w",
      style: "mapbox://styles/mapbox/streets-v12",
      center:[currentLoc[0], currentLoc[1]],
      zoom: 9,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(currentLoc)
      .addTo(mapboxMap);

    
    });
    getRoute(nearestLocation);

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  // Remaining code...

  return (
    <>
      <div ref={mapNode} style={{ width: "100%", height: "100vh" }} />
    </>
  );
}

export default MapboxMap;