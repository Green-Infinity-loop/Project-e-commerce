import React, { useEffect, useState, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import { Feature } from "geojson";
import { useRouter } from "next/router";
import Link from "next/link";
import { LocationContext } from "@/context/LocationContext";
// import the mapbox-gl styles so that the map is displayed correctly

function MapboxMap(data: any) {
  const [map, setMap] = useState<mapboxgl.Map>();
  const { currentLoc }: any = useContext(LocationContext);
  console.log("currentLoc map", currentLoc);

  const { nearestLocation } = data;

  console.log("nearestLocation map", nearestLocation);

  const [node, setNode] = useState<any>("");
  const mapNode = useRef<HTMLDivElement>(null);
  const token =
    "pk.eyJ1IjoibXVuZ3Vuc2hhZ2FpIiwiYSI6ImNsaHUwMjhtNDBnZ3gzdGw5MXhxcGhoOXUifQ.7rdAZiweqotAkzdUXLAl5w";
  useEffect(() => {
    setNode(mapNode.current);
  }, [nearestLocation]);

  async function getRoute(end: any) {
    console.log("end map");

    try {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${currentLoc[0]},${currentLoc[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${token}`,
        { method: "GET" }
      );
      const json = await query.json();
      console.log(json);

      const data = json.routes[0];
      const route = data?.geometry?.coordinates;
      const geojson: Feature = {
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
      if (nearestLocation.length !== 0) {
        let geojson: any = [0, 0];

        geojson = await getRoute(nearestLocation);

        console.log("geojson", geojson);

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
                      coordinates: geojson.geometry.coordinates,
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

          if (mapboxMap.getSource("route")) {
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
          .setLngLat([nearestLocation[0], nearestLocation[1]])
          .setPopup(popup)
          .addTo(mapboxMap);
      }
    }
  }, 0);

  return (
    <>
      <div
        ref={mapNode}
        style={{ width: "100%", height: "70vh", borderRadius: "20px" }}
      />
    </>
  );
}

export default MapboxMap;
