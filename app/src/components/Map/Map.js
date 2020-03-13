import React from "react";
import "./Map.css";

class Map extends React.Component {
  componentDidMount() {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken =
      "pk.eyJ1Ijoicnlhbm1hcnRlbiIsImEiOiJjazc5aDZ6Zmgwcno0M29zN28zZHQzOXdkIn0.aXAWfSB_yY8MzA2DajzgBQ";
    var places = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            icon: "theatre"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.038659, 38.931567]
          }
        },
        {
          type: "Feature",
          properties: {
            icon: "theatre"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.003168, 38.894651]
          }
        },
        {
          type: "Feature",
          properties: {
            icon: "bar"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.090372, 38.881189]
          }
        },
        {
          type: "Feature",
          properties: {
            icon: "bicycle"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.052477, 38.943951]
          }
        },
        {
          type: "Feature",
          properties: {
            icon: "music"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.031706, 38.914581]
          }
        },
        {
          type: "Feature",
          properties: {
            icon: "music"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.020945, 38.878241]
          }
        },
        {
          type: "Feature",
          properties: {
            icon: "music"
          },
          geometry: {
            type: "Point",
            coordinates: [-77.007481, 38.876516]
          }
        }
      ]
    };

    var layerIDs = []; // Will contain a list used to filter against.
    var filterInput = document.getElementById("filter-input");
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-77.04, 38.907],
      zoom: 11.15
    });

    map.on("load", function() {
      // Add a GeoJSON source containing place coordinates and information.
      map.addSource("places", {
        type: "geojson",
        data: places
      });

      places.features.forEach(function(feature) {
        var symbol = feature.properties["icon"];
        var layerID = "poi-" + symbol;

        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(layerID)) {
          map.addLayer({
            id: layerID,
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": symbol + "-15",
              "icon-allow-overlap": true,
              "text-field": symbol,
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 11,
              "text-transform": "uppercase",
              "text-letter-spacing": 0.05,
              "text-offset": [0, 1.5]
            },
            paint: {
              "text-color": "#202",
              "text-halo-color": "#fff",
              "text-halo-width": 2
            },
            filter: ["==", "icon", symbol]
          });

          layerIDs.push(layerID);
        }
      });

      filterInput.addEventListener("keyup", function(e) {
        // If the input value matches a layerID set
        // it's visibility to 'visible' or else hide it.
        var value = e.target.value.trim().toLowerCase();
        layerIDs.forEach(function(layerID) {
          map.setLayoutProperty(
            layerID,
            "visibility",
            layerID.indexOf(value) > -1 ? "visible" : "none"
          );
        });
      });
    });

    map.scrollZoom.disable();
  }

  render() {
    return (
      <div>
        <div class="title">Dreamtune Map</div>
        <div id="map"></div>
        <div class="filter-ctrl">
          <input
            id="filter-input"
            type="text"
            name="filter"
            placeholder="Filter by name"
          />
        </div>

        <script></script>
      </div>
    );
  }
}

export default Map;
