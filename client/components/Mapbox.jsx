import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import { geocode } from '../api/geocode'

class Mapbox extends React.Component {
  constructor () {
    super()
    this.state = {
      latitude: -36.867599,
      longitude: 174.778000,
      location: 'Newmarket, Auckland'
    }
  }

  Geocode = () => {
    geocode(this.state.location)
      .then(apiRes => {
        const { lat, lng } = apiRes.items[0].position
        this.setState({
          latitude: lat,
          longitude: lng,
          location: this.state.location
        })
      })
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
