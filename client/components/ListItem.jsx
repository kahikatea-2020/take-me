import React from 'react'
import { Link } from 'react-router-dom'

class ListItem extends React.Component {
  render () {
    const listing = this.props.listing
    return (
      <>
        <img style={{maxWidth: '200px'}} src={`https://res.cloudinary.com/takemenz/image/upload/${JSON.parse(listing.imageUrl)[0]}`} alt={listing.name}/>
        <h3><Link to={`/listings/${listing.id}`}>{listing.name}</Link></h3>
      </>
    )
  }
}

export default ListItem
