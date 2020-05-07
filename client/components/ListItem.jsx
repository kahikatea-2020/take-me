import React from 'react'
import { Link } from 'react-router-dom'

class ListItem extends React.Component {
  render () {
    const listing = this.props.listing
    return (
      <>
        <img src={listing.imgUrl} alt={listing.title}/>
        <h3><Link to={`/listing/${listing.id}`}>{listing.title}</Link></h3>
      </>
    )
  }
}

export default ListItem
