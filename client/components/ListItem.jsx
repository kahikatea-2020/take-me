import React from 'react'
import { Link } from 'react-router-dom'

class ListItem extends React.Component {
  render () {
    const listing = this.props.listing
    return (
      <>
        <img style={{maxWidth: '200px'}} src={listing.imageUrl} alt={listing.name}/>
        <h3><Link to={`/listing/${listing.id}`}>{listing.name}</Link></h3>
      </>
    )
  }
}

export default ListItem
