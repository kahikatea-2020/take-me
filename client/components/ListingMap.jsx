import React from 'react'
import Geocode from 'react-geocode'

import { GoogleMap, withScriptjs, withGoogleMap, Circle } from 'react-google-maps'

Geocode.setApiKey('AIzaSyBo31yLsQW_1lYvSa4rYMqVkGyF1H7KDBo')

class MapLocation extends React.Component {
  state = {
    lat: null,
    lng: null
  }

  render () {
    Geocode.fromAddress('Ellerslie, Auckland').then(
      res => {
        const { lat, lng } = res.results[0].geometry.location
        this.setState({ lat, lng })
      },
      error => {
        console.log(error)
      }
    )
    return (
      <>
        <GoogleMap
          zoom={14}
          center={{ lat: this.state.lat, lng: this.state.lng }}
        >
          <Circle
            center={{ lat: this.state.lat, lng: this.state.lng }}
            radius={800} /* radius is set in metres */
            options={{
              strokeColor: '#f79421',
              strokeOpacity: 0.95,
              fillColor: '#f79421',
              fillOpacity: 0.35
            }}
          />
        </GoogleMap>
      </>
    )
  }
}

const WrappedMap = withScriptjs(withGoogleMap(MapLocation))

export default function ListingMap () {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBo31yLsQW_1lYvSa4rYMqVkGyF1H7KDBo'}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
      />
    </div>
  )
}
