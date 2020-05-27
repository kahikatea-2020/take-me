import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

function ListingMap () {
  const [viewport, setViewport] = useState({
    latitude: -36.864479,
    longitude: 174.776733,
    width: '30vw',
    height: '30vh',
    zoom: 10
  })
  return (
    <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
        Markers here
    </ReactMapGL>
  )
}

export default ListingMap
