import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
import mapboxgl from 'mapbox-gl';
import marker from './location.png';
import "Common.css";

// core components
import Header from "components/Headers/Header.js";
// mapTypeId={google.maps.MapTypeId.ROADMAP}

class Maps extends React.Component {
  state = {
		features: [],
		loading: false,
		locationChosen: false
	};

	getAllLocations = (mapboxgl, map) => {

		/* let getParams = {};
		getParams["headers"] = {"Authorization" : this.props.store.session.idToken.jwtToken};
		Amplify.API.get('getLocations', '', getParams).then((response) => {
			const features = [];

			if (Object.entries(response).length === 0 && response.constructor === Object) {
				response = [];
			}
      
			response.forEach((location) => {
				features.push({
					'type': 'Feature',
					'properties': {
						'location': location.latitude + "," + location.longitude,
						'name': location.name.split(",")[0],
						'icon': 'theatre'
					},
					'geometry': {
						'type': 'Point',
						'coordinates': [parseFloat(location.longitude), parseFloat(location.latitude)]
					}
				});
			});
			this.setState({ features: features });

			// Plot features on map
			this.addFeatures(mapboxgl, map, features);
		}).catch((error) => {
			console.error(error);
    });
    */
	};

	addFeatures(mapboxgl, map, features) {

		map.loadImage(marker, (error, image) => {
			if (error) throw error;
			map.addImage('post-icon', image);
		});
    
		map.addSource('places', {
			'type': 'geojson',
			'data': {
				'type': 'FeatureCollection',
				'features': features
			}
		});
		// Add a layer showing the places.
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
		});

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

	componentDidMount() {
		mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hcnRlbiIsImEiOiJjazc5aDZ6Zmgwcno0M29zN28zZHQzOXdkIn0.aXAWfSB_yY8MzA2DajzgBQ';
		let map = new mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/ryanmarten/ck7jbiwkj34nv1io28t0c73ts',
			center: [-79.3949, 43.6529], // starting position - Toronto
			zoom: 10.99 // starting zoom - Includes KCS Senior School Location
		});

		// Add zoom and rotation controls to the map.
		map.addControl(new mapboxgl.NavigationControl());

		// Disable Scroll Zoom
		map.scrollZoom.disable();

		// Get all the posts and plot on the map 
		// this.getAllPosts(mapboxgl, map);

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

	// render() {
	// 	return (
			
	// 		<div className="Explore dark-grey light-grey-text">
	// 			<h1 className="exploreTitle"> Click a location to see posts from that area! </h1>
	// 			<div id="map" className="rounded"></div>
	// 			<PostFeed store={ this.props.store } preventDefaultLoad={true}/>
	// 		</div>
	// 	)
	// }

  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                {/* <MapWrapper
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `600px` }} className="map-canvas" id="map-canvas"/>}
                  mapElement={<div style={{ height: `100%`, borderRadius: "inherit" }} />}
                /> */}
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
