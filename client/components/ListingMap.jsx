import React from 'react'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function MapLocation () {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -36.864480, lng: 174.776730 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(MapLocation))

export default function ListingMap () {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
      />
    </div>
  )
}
