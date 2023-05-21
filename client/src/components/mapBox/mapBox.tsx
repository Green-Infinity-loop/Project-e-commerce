import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
// import the mapbox-gl styles so that the map is displayed correctly

function MapboxMap() {
  const [map, setMap] = React.useState<mapboxgl.Map>();
  const [currentLoc, setCurrentLoc] = React.useState([106.918162,47.915596]);
  const [nearestLocation, setNearestLocation] = React.useState({});
  const mapNode = React.useRef(null);
  const token = "pk.eyJ1IjoibXVuZ3Vuc2hhZ2FpIiwiYSI6ImNsaHUwMjhtNDBnZ3gzdGw5MXhxcGhoOXUifQ.7rdAZiweqotAkzdUXLAl5w"

// async function findNearestLocation() {
//     const res = await axios.get(
//       `http://localhost:8080/locations/findnearest?lat=${currentLoc[0]}&long=${currentLoc[1]}`
//     );
//     const data = await res.data;
//     setNearestLocation(data);
//   }
  async function findNearestLocation(long, lat) {
    const res = await axios.get(
      `http://localhost:8080/locations/findnearest?lat=${lat}&long=${long}`
    );
    const data = await res.data;
    setNearestLocation(data);
  }
  console.log('nearest loc:', nearestLocation)


  function getRoute(coords) {
    const start = [currentLoc[0], currentLoc[1]];
    const end = coords;
    console.log(end)

    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=${token}`
      )
      .then((response) => {
          console.log("res:",response)
        const matchings = response.data.routes[0];
        console.log("mat:",matchings)
        if (matchings.length > 0) {
          const { geometry } = matchings[0];
          console.log("geo:",geometry)
          // Process the matched route geometry
          // ...
          if (map.getLayer("routes")) {
          map.removeLayer("routes");
        }

        // Remove the existing route source if it already exists
        if (map.getSource("routes")) {
          map.removeSource("routes");
        }

        // Add a new layer for the route
        map.addLayer({
          id: "routes",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: geometry.coordinates,
              },
            },
          },
          paint: {
            "line-color": "#0074D9", // Change the color of the route line
            "line-width": 3, // Change the width of the route line
          },
        });
        }
      })
      .catch((error) => {
        console.error("Error getting route:", error);
      });
  }

  
  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window != "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLoc([position.coords.latitude, position.coords.longitude]);
          findNearestLocation(
            position.coords.longitude,
            position.coords.latitude
            
          );
          console.log(
            "my current loc:",
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.log("aldaa", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    
    console.log('lat long:', currentLoc[1], currentLoc[0])
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoibXVuZ3Vuc2hhZ2FpIiwiYSI6ImNsaHUwMjhtNDBnZ3gzdGw5MXhxcGhoOXUifQ.7rdAZiweqotAkzdUXLAl5w",
      style: "mapbox://styles/mapbox/streets-v12",
      center:[currentLoc[0], currentLoc[1]],
      zoom: 9,
    });
    console.log(currentLoc)
    const marker = new mapboxgl.Marker()
      .setLngLat(currentLoc)
      .addTo(mapboxMap);
    setMap(mapboxMap);
    return () => {
      mapboxMap.remove();
    };
  }, []);

  React.useEffect(() => {
    if (map && Object.keys(nearestLocation).length > 0) {
      const { long, lat } = nearestLocation;
      console.log("Nearest location:", nearestLocation);
      console.log("LngLat:", long, lat);
      const nearestMarker = new mapboxgl.Marker()
        .setLngLat(nearestLocation.location.coordinates)
        .addTo(map);
    // getRoute(nearestMarker)
    }
  }, [map, nearestLocation]);




  React.useEffect(() => {
    if (map) {
      map.on("click", (event) => {
        const coords = Object.keys(event.lngLat).map(
          (key) => event.lngLat[key]
        );
        const end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        };

        if (map.getLayer("end")) {
          map.getSource("end").setData(end);
        } else {
          map.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coords,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }

        getRoute(coords);
      });
    }
  }, [map]);







  
  
//   
  return (
      <>
      <div className="container">

        <div ref={mapNode} style={{ width: "100%", height: "70vh", borderRadius:'100px' }} />
      </div>
        
      </>
  );
}

export default MapboxMap;