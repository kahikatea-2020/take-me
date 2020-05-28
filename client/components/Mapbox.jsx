import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

class Mapbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      latitude: -36.864479,
      longitude: 174.776733
    }
  }

  ListingMap = () => {
    const [viewport, setViewport] = useState({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      width: '30vw',
      height: '30vh',
      zoom: 11
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
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        >
          <button className='marker-btn'>
            <img src='/favicon-take-me.ico' alt='TakeMe octopus as map marker' />
          </button>
        </Marker>
      </ReactMapGL>
    )
  }

  render () {
    return (
      <this.ListingMap />
    )
  }
}

export default Mapbox
