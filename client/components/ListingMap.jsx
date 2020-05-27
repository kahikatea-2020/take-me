import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

class ListingMap extends React.Component {
  state = {
    viewport: {
      latitude: -36.864479,
      longitude: 174.776733,
      width: '30vw',
      height: '30vh',
      zoom: 12
    }
  }

  render () {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/ellorav/ckapzm89l24ph1jlpo6wdzq1q'
        onViewportChange={viewport => {
          this.setState(viewport)
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
}

export default ListingMap
