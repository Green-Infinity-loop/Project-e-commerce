import  React,{useEffect, useState, useRef}from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import Menus from "../Map Page/Menus";
import { useBasket } from "@/Hooks/useBasket";
import { Feature } from 'geojson';
// import the mapbox-gl styles so that the map is displayed correctly


function MapboxMap() {
  const [map, setMap] = useState<mapboxgl.Map>();
  const {basket} = useBasket()
 
  
  const [currentLoc, setCurrentLoc] = useState([106.918162,47.915596]);
  const [nearestLocation, setNearestLocation] = useState<any>([]);
  const [node, setNode] = useState<any>("");
  const mapNode = useRef<HTMLDivElement>(null);
  const token = "pk.eyJ1IjoibXVuZ3Vuc2hhZ2FpIiwiYSI6ImNsaHUwMjhtNDBnZ3gzdGw5MXhxcGhoOXUifQ.7rdAZiweqotAkzdUXLAl5w"


useEffect(() => {
    getMyLocation();
    setNode(mapNode.current);
  }, []);

useEffect(() => {
    if (typeof window !== "undefined") {

       findNearestLocation();

      
    }
  }, [node, currentLoc]);
  

  async function getRoute(end:any) {
    // const end = coords.location.coordinates;
    console.log('end:',end);
     console.log('current loc:',currentLoc)

    try {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${currentLoc[0]},${currentLoc[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${token}`,
        { method: "GET" }
      );
      const json = await query.json();
      console.log("yu irev:", json);
      const data = json.routes[0];
      const route = data?.geometry?.coordinates;
      console.log("route: ", route);
      const geojson:Feature = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };
      return geojson;
    } catch (e) {
      console.log("data unshij bna");
    }
  }

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

    async function findNearestLocation() {
          const ids = {ids:basket.items.map((item:any)=>item.productId)}
          console.log('current location:', currentLoc)
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/${ids.ids[0]}/findnearest?lat=${currentLoc[0]}&long=${currentLoc[1]}`
    );
    const data = await res.data;
    console.log('find nearest:' , data)
    setNearestLocation(data);
  }

  setTimeout(async () => {
        if (mapNode.current != null) {
          const mapboxMap = new mapboxgl.Map({
            container: mapNode.current,
            accessToken:
              "pk.eyJ1IjoibXVuZ3Vuc2hhZ2FpIiwiYSI6ImNsaHUwMjhtNDBnZ3gzdGw5MXhxcGhoOXUifQ.7rdAZiweqotAkzdUXLAl5w",
            style: "mapbox://styles/mapbox/navigation-night-v1",
            center: [currentLoc[0], currentLoc[1]],
            zoom: 15,
          });
          console.log('nearest',nearestLocation)
          const geojson = await getRoute(nearestLocation?.location.coordinates);
          console.log('geojson', geojson)
          mapboxMap?.on("load", async () => {
            mapboxMap.addLayer({
              id: "point",
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
                        coordinates: nearestLocation?.location.coordinates
                      },
                    },
                  ],
                },
              },
              paint: {
                "circle-radius": 10,
                "circle-color": "#3887be",
              },
            });

             if (mapboxMap?.getSource("route")) {
            console.log("map iishe orson");
            mapboxMap.getSource("route");
          }
          // otherwise, we'll make a new request
          else {
            console.log("else uyd");
            mapboxMap?.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: geojson,
              },
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "red",
                "line-width": 10,
                "line-opacity": 0.75,
              },
            });
          }
            // this is where the code from the next step will go
          });

         
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h1>Таны одоогийн байршил</h1>"
          );

          
          const marker = new mapboxgl.Marker({ color: "red" })
            .setLngLat([currentLoc[0], currentLoc[1]])
            .setPopup(popup)
            .addTo(mapboxMap);

             const marker2 = new mapboxgl.Marker({ color: "green" })
            .setLngLat([nearestLocation?.location.coordinates[0], nearestLocation?.location.coordinates[1]])
            .setPopup(popup)
            .addTo(mapboxMap);

            

          
        }
      }, 5);

  return (
      <>
      <div className="container">
        <div ref={mapNode} style={{ width: "100%", height: "70vh", borderRadius:'100px' }} />
      </div>
        
      </>
  );
}

export default MapboxMap;