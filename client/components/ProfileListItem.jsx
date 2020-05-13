import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { deleteListingById, markAsTaken } from '../api/listings'
import { userPending } from '../actions/users'
import { getUsersListings } from '../actions/listings'

const MySwal = withReactContent(Swal)

class ListItem extends React.Component {
  handleTaken = (id) => {
    markAsTaken(id)
      .then(res => {
        if (res === 'success') {
          this.props.dispatch(getUsersListings(this.props.listing.userId))
        }
      })
  }

  handleDelete = id => {
    this.props.dispatch(userPending())
    deleteListingById(id)
      .then (() => {
        this.props.dispatch(getUsersListings(this.props.listing.userId))
      })
  }

  render() {
    const listing = this.props.listing
    return (
      <Card className="listingCard">
        <Link to={`/listings/${listing.id}`}>
          <Image centered={true} style={{ height: '300px', width: '100%', objectFit: 'cover'}} src={listing.imageUrl[0] ? `https://res.cloudinary.com/takemenz/image/upload/${listing.imageUrl[0]}` : ''} alt={listing.name} />
        </Link>
        <Card.Content>
          <Card.Header as={Link} to={`/listings/${listing.id}`}>
            {listing.name}
          </Card.Header>
          <Card.Meta>{listing.location}</Card.Meta>
          <Card.Description>{listing.category}</Card.Description>
          <div className="extra content">
          </div>
        </Card.Content>
        { this.props.authenticated && <>
          {this.props.current &&
            <div className='ui two buttons'>
              <Button style={{ marginRight: '1px'}} onClick={() => this.props.history.push(`/update-listing/${listing.id}`)}>Update</Button>
              <Button style={{ marginLeft: '1px'}} name={listing.id} onClick={() => Swal.fire({
                title: 'Are you sure?',
                text: 'You cannot undo this.',
                icon: 'warning',
                confirmButtonText: 'Yes, it is taken',
                cancelButtonText: 'No, keep it listed',
                showCancelButton: true
                }).then((result) => {
                  if (result.value) {
                    this.handleTaken(listing.id)
                    Swal.fire({
                      title: 'Taken!',
                      text: 'Your item has been marked as taken',
                      icon: 'success'
                    })
                  } else {
                    Swal.fire({
                      title: 'Cancelled',
                      text: 'Your listing is still active',
                      icon: 'error'
                    })
                  }})}>
                Mark as Taken
              </Button>
            </div>
          }
          <Button style={{ marginTop: '2px'}} onClick={() => Swal.fire({
                title: 'Wait!',
                text: 'Are you sure you want to delete this item?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it',
                cancelButtonText: 'No, keep it'
                }).then((result) => {
                  if (result.value) {
                    this.handleDelete(listing.id)
                    Swal.fire({
                      title: 'Deleted!',
                      text: 'Your file has been deleted',
                      icon: 'success'
                    })
                  } else {
                    Swal.fire({
                      title: 'Cancelled',
                      text: 'Your listing is safe',
                      icon: 'error'
                    })
                  }
              })}>
              Delete
            </Button>
        </> }
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    usersListings: state.userListings,
    pending: state.pending,
    user: state.user
  }
}

export default connect(mapStateToProps)(ListItem)
