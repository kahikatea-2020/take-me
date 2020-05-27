import React from 'react'

import { GoogleMap, withScriptjs, withGoogleMap, Circle } from 'react-google-maps'

function MapLocation () {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: -36.864480, lng: 174.776730 }}
    >
      <Circle
        center={{ lat: -36.864480, lng: 174.776730 }}
        radius={800} /* radius is set in metres */
        options={{
          strokeColor: '#f79421',
          strokeOpacity: 0.95,
          fillColor: '#f79421',
          fillOpacity: 0.35
        }}
      />
    </GoogleMap>
  )
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
