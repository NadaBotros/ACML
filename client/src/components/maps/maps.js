import React, { Component } from 'react'
import {
  GoogleApiWrapper,
  Map,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from 'google-maps-react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const mapStyles = {
  height: '100%',
  width: '100%'
}

const origin = { lat: 29.98511, lng: 31.442849 }
const destination = { lat: 29.98531, lng: 31.440892 }

const iconBase =
  'https://developers.google.com/maps/documentation/javascript/examples/full/images/'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    const longitude = this.props.match.params.long
    const latitude = this.props.match.params.lat
    this.state = {
      directionsService: new window.google.maps.DirectionsService(),
      directions: null,
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {},
      showingInfoWindow: false,
      markers: [
        {
          coords: { lat: 29.98531, lng: 31.440892 },
          content: 'P1',
          // animation: Map.Animation.DROP,
          icon: iconBase + 'parking_lot_maps.png'
        },
        {
          coords: { lat: 29.985349, lng: 31.442857 },
          content: 'P8',
          //animation: google.maps.Animation.DROP,
          icon: iconBase + 'parking_lot_maps.png'
        },
        {
          coords: { lat: 29.98511, lng: 31.442849 },
          content: 'P7',
          //animation: google.maps.Animation.DROP,
          icon: iconBase + 'parking_lot_maps.png'
        },
        {
          coords: { lat: 29.984901, lng: 31.442852 },
          content: 'P6',
          //animation: google.maps.Animation.DROP,
          icon: iconBase + 'parking_lot_maps.png'
        },
        {
          coords: { lat: 29.984643, lng: 31.442445 },
          content: 'P5',
          //animation: google.maps.Animation.DROP,
          icon: iconBase + 'parking_lot_maps.png'
        },
        {
          coords: { lat: longitude, lng: latitude },
          content: 'Spot'
          //animation: google.maps.Animation.DROP,
          // icon: iconBase + 'parking_lot_maps.png'
        }
      ]
    }
    // const directionService = new window.google.maps.DirectionsService()
    // directionService.route(
    // 	{
    // 		origin: origin,
    // 		destination: destination,
    // 		optimizeWaypoints: true,
    // 		travelMode: window.google.maps.TravelMode.DRIVING
    // 	},
    // 	(result, status) => {
    // 		console.log('status', status)
    // 		if (status === window.google.maps.DirectionsStatus.OK) {
    // 			this.setState({
    // 				directions: result
    // 			})
    // 		} else {
    // 			console.error(`error fetching directions ${result}`)
    // 		}
    // 	}
    // )
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render() {
    return (
      <Map
        key={'map'}
        id={'map'}
        google={window.google}
        zoom={18.5}
        defaultOptions={true}
        options={{
          mapTypeId: 'satellite',
          mapTypeControl: false
        }}
        initialCenter={{ lat: 29.9849434, lng: 31.4418606 }}
        onClick={this.onMapClicked}
      >
        <Button style={{ marginLeft: '70mm', backgroundColor: 'black' }}>
          <Link style={{ color: 'white' }} to="/">
            Home
          </Link>
        </Button>

        <Marker
          key={1}
          id={1}
          position={{
            lat: this.state.markers[0].coords.lat,
            lng: this.state.markers[0].coords.lng
          }}
          showingInfoWindow={true}
          icon={this.state.markers[0].icon}
          onClick={this.onMarkerClick}
          name={this.state.markers[0].content}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Marker
          key={2}
          id={2}
          position={{
            lat: this.state.markers[1].coords.lat,
            lng: this.state.markers[1].coords.lng
          }}
          showingInfoWindow={true}
          icon={this.state.markers[1].icon}
          onClick={this.onMarkerClick}
          name={this.state.markers[1].content}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Marker
          key={3}
          id={3}
          position={{
            lat: this.state.markers[2].coords.lat,
            lng: this.state.markers[2].coords.lng
          }}
          showingInfoWindow={true}
          icon={this.state.markers[2].icon}
          onClick={this.onMarkerClick}
          name={this.state.markers[2].content}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Marker
          key={4}
          id={4}
          position={{
            lat: this.state.markers[3].coords.lat,
            lng: this.state.markers[3].coords.lng
          }}
          showingInfoWindow={true}
          icon={this.state.markers[3].icon}
          onClick={this.onMarkerClick}
          name={this.state.markers[3].content}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Marker
          key={5}
          id={5}
          position={{
            lat: this.state.markers[4].coords.lat,
            lng: this.state.markers[4].coords.lng
          }}
          showingInfoWindow={true}
          icon={this.state.markers[4].icon}
          onClick={this.onMarkerClick}
          name={this.state.markers[4].content}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Marker
          key={6}
          id={6}
          position={{
            lat: this.state.markers[5].coords.lat,
            lng: this.state.markers[5].coords.lng
          }}
          showingInfoWindow={true}
          //icon={this.state.markers[5].icon}
          onClick={this.onMarkerClick}
          name={this.state.markers[5].content}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        {/* <DirectionsRenderer directions={this.state.directions} /> */}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCeeH70MSClXRxC57m680S1HuxJp8wzphs'
})(MapContainer)
