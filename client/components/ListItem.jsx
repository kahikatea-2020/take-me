import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

class ListItem extends React.Component {
  render() {
    const listing = this.props.listing
    return (
      <Card>
        <Link to={`/listings/${listing.id}`}>
          <Image centered={true} style={{ height: '300px', width: '100%', objectFit: 'cover'}} src={`https://res.cloudinary.com/takemenz/image/upload/${listing.imageUrl[0]}`} alt={listing.name} />
        </Link>
        <Card.Content>
          <Card.Header as={Link} to={`/listings/${listing.id}`}>
            {listing.name}
          </Card.Header>
          <Card.Meta>{listing.location}</Card.Meta>
          <Card.Description>{listing.category}</Card.Description>
          <div className="extra content">
            <div className="right floated author">
              <img className="ui avatar image" src={`https://res.cloudinary.com/takemenz/image/upload/${listing.userImage}`} />
            </div>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default ListItem
