import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

function ListingMap () {
  const [viewport, setViewport] = useState({
    latitude: -36.864479,
    longitude: 174.776733,
    width: '30vw',
    height: '30vh',
    zoom: 12
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/ellorav/ckapzm89l24ph1jlpo6wdzq1q'
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
    >
      <Marker
        latitude={-36.864479}
        longitude={174.776733}
      >
        <button className='marker-btn'>
          <img src='/favicon-take-me.ico' alt='TakeMe icon as item marker' />
        </button>
      </Marker>
    </ReactMapGL>
  )
}

export default ListingMap
