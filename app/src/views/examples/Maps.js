import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
import mapboxgl from 'mapbox-gl';
import marker from './location.png';
import "Common.css";
import { getFirebaseDatabase } from "components/Firestore/Firestore.js";

// core components
import Header from "components/Headers/Header.js";
// mapTypeId={google.maps.MapTypeId.ROADMAP}

class Maps extends React.Component {
  	state = {
		features: [],
		loading: false,
		locationChosen: false,
		layerIDs: []
	};

	parseVenueTable = (venueTable, type, featuresLocal) => {

		Object.keys(venueTable).map((key) => {
			let venue = venueTable[key];
			//console.log(venue);
			let coords = venue.coordinates;
			// console.log(coords);

			if (coords !== undefined){
				featuresLocal.push({
				'type': 'Feature',
				'properties': {
					'location': coords.latitude + "," + coords.longitude,
					'name': venue.name.split(",")[0],
					'icon': type
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [parseFloat(coords.longitude), parseFloat(coords.latitude)]
				}
			});
		}
		})

	}

	parseSnapshot = (snapshot) => {
		let venueData = snapshot.val();
		// console.log(venueData); //All the venues in the gym table
		
		const featuresLocal = [...this.state.features];
		
		let gymVenueData = venueData['gym'];
		let restaurantVenueData = venueData['restaurant'];

		this.parseVenueTable(gymVenueData, "fitness-centre", featuresLocal);
		this.parseVenueTable(restaurantVenueData, "restaurant", featuresLocal);

		//console.log(featuresLocal);
		let joined = this.state.features.concat(featuresLocal);
		this.setState({ features: joined });
		//console.log(this.state.features);

	}

	getAllLocations = (mapboxgl, map) => {

		let db = getFirebaseDatabase();

		db.ref("Venues").once("value").then( (snapshot) => {
			this.parseSnapshot(snapshot, map);
			console.log(this.state.features);
			this.addFeatures(mapboxgl, map, this.state.features);
		});

		
	};

	addFeatures = (mapboxgl, map, features) => {

		// map.loadImage(marker, (error, image) => {
		// 	if (error) throw error;
		// 	map.addImage('post-icon', image);
		// });
    
		map.addSource('places', {
			'type': 'geojson',
			'data': {
				'type': 'FeatureCollection',
				'features': features
			}
		});
		// Add a layer showing the places.
		/*
		map.addLayer({
			'id': 'places-labels',
			'type': 'symbol',
			'source': 'places',
			'layout': {
				'text-field': ['get', 'name'],
				'text-variable-anchor': ['top'],
				'text-radial-offset': 1.0,
				'text-justify': 'auto',
				'icon-image': 'post-icon',
				'icon-allow-overlap': true,
				'icon-size': 0.3
			},
			"paint": {
				"icon-color": "#539038",
				// "text-color":"#9fcb3b",
				// "text-size":12
			}
		}); */
		let layerIDs = this.state.layerIDs;
		features.forEach(function(feature) {
			var symbol = feature.properties["icon"];
			var layerID = "poi-" + symbol;
	
			// Add a layer for this symbol type if it hasn't been added already.
			if (!map.getLayer(layerID)) {
			  let color = "#202";
			  if (symbol === "restaurant"){
					color = "#a200ff";
			  }
			  map.addLayer({
				id: layerID,
				type: "symbol",
				source: "places",
				layout: {
				  "icon-image": symbol + "-15",
				  "icon-allow-overlap": true,
				  'text-field': ['get', 'name'],
				  "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
				  "text-size": 11,
				  "text-transform": "uppercase",
				  "text-letter-spacing": 0.05,
				  "text-offset": [0, 1.5]
				},
				paint: {
				  "text-color": color,
				  "text-halo-color": "#fff",
				  "text-halo-width": 2
				},
				filter: ["==", "icon", symbol]
			  });
	
			  layerIDs.push(layerID);
			}
		  });

		  this.setState({ layerIDs: layerIDs });

		// When a click event occurs on a feature in the places layer
		map.on('click', 'places-labels', (e) => {
			let location = e.features[0].properties.location;
			console.log(location);
			//this.props.store.search(location)
		});

		// Change the cursor to a pointer when the mouse is over the places layer.
		map.on('mouseenter', 'places-labels', function () {
			map.getCanvas().style.cursor = 'pointer';
		});

		// Change it back to a cursor when it leaves.
		map.on('mouseleave', 'places-labels', function () {
			map.getCanvas().style.cursor = '';
		});
	}

	componentDidMount = () => {
		mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hcnRlbiIsImEiOiJjazc5aDZ6Zmgwcno0M29zN28zZHQzOXdkIn0.aXAWfSB_yY8MzA2DajzgBQ';
		let map = new mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/ryanmarten/ck7jbiwkj34nv1io28t0c73ts',
			center: [-79.3949, 43.6529], // starting position - Toronto
			zoom: 9 // starting zoom
		});

		// Add zoom and rotation controls to the map.
		map.addControl(new mapboxgl.NavigationControl());

		// Disable Scroll Zoom
		map.scrollZoom.disable();

		// Get all the locations and plot on the map
		map.on('load', () => {this.getAllLocations(mapboxgl, map)})

		 map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: false
            })
        );
	}

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
				<div id="map"></div>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Maps;
