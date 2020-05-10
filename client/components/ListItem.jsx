import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

class ListItem extends React.Component {
  render () {
    const listing = this.props.listing
    return (
      <>
        <Card>
          <a className="image" href={`/listings/${listing.id}`}>
            <img style={{maxWidth: '200px'}} src={`https://res.cloudinary.com/takemenz/image/upload/${JSON.parse(listing.imageUrl)[0]}`} alt={listing.name}/>
          </a>
          <div className="content">
            <h3><Link to={`/listings/${listing.id}`}>{listing.name}</Link></h3>
            <div className="meta">
              <a>{listing.location}</a>
            </div>
          </div>
        </Card>
      </>
    )
  }
}

export default ListItem
