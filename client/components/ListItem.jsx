import React from 'react'
import { Link } from 'react-router-dom'


class ListItem extends React.Component {
  render () {
    const listing = this.props.listing
    return (
      <>
        <div class="ui card">
          <a class="image" href={`/listings/${listing.id}`}>
            <img style={{maxWidth: '200px'}} src={`https://res.cloudinary.com/takemenz/image/upload/${JSON.parse(listing.imageUrl)[0]}`} alt={listing.name}/>
          </a>
          <div class="content">
            <h3><Link to={`/listings/${listing.id}`}>{listing.name}</Link></h3>
            <div class="meta">
              <a>{listing.location}</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ListItem
