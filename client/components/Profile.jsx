import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Card, Button, Image, Header, Grid } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'

import WaitIndicator from './WaitIndicator'
import ListItem from './ListItem'

import { getUserById } from '../api/users'
import { userPending, userSuccess, getUserDetails } from '../actions/users'
import { getUsersListings } from '../actions/listings'
import { deleteListingById } from '../api/listings'

const MySwal = withReactContent(Swal)

class Profile extends React.Component {
  state = {
    profile: {},
  }

  componentDidMount () {
    this.props.dispatch(getUsersListings(this.props.match.params.id))
    getUserById(this.props.match.params.id)
    .then(profile => {
      if (profile !== null) {
        this.setState({
          profile
        })
      } else {
        this.props.history.push(`/404`)
      }
    })
  }

  handleDelete = id => {
    this.props.dispatch(userPending())
    deleteListingById(id)
      .then (() => {
        this.props.dispatch(getUsersListings(this.props.match.params.id))
      })
  }
  render () {
    const { profile } = this.state
    const listing = this.props.usersListings.map(listing => ({
      ...listing,
      userImage: profile.imageUrl
    }))
    
    return (
      <>
        <div style={{ height: '300px' }} className="ui right aligned grid">
          <div style={{ height: '300px' }} className="center aligned two column row">
            <div className="column">
              <Image style={{ width: '200px', float: 'right' }} src={`https://res.cloudinary.com/takemenz/image/upload/${profile.imageUrl}`} alt="Profile Photo" />
            </div>
            <div className="column left aligned row">
              <div style={{ verticalAlign: 'middle' }}>
                <h2 style={{ marginBottom: '0px' }}>{profile.firstName} {profile.lastName}</h2>
                <em>{profile.username}</em><br />
                  <br />
                <p>Email: {profile.email}</p>
                <p>Phone Number: {profile.phoneNumber}</p>
                <p>Location: {profile.location}</p>
                {(isAuthenticated() && (this.props.user.id === profile.id)) &&
                <Button as={Link} to={`/edit-profile/${profile.id}`} basic color='blue'>Edit Profile</Button>
                }
                </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Your Listings</h2>
          <Card.Group itemsPerRow={4} className='centered'>
          <>
          {listing.length !== 0 
            ? listing.map(userListing => {
              return <div className="ui card" key={userListing.id}>
              <ListItem key={userListing.id} listing={userListing} />
              {
                isAuthenticated() && this.props.user.id === profile.id &&
                  <div className='ui two buttons'>
                    <Button as='a' to={`/update-listing/${userListing.id}`} basic color='blue'>Update</Button>
                    <Button onClick={() => Swal.fire({
                        title: 'Are you sure?',
                        text: 'Are you sure you want to delete this item!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it',
                        cancelButtonText: 'No, keep it!'
                      }).then((result) => {
                        if (result.value) {
                          this.handleDelete(userListing.id)
                          Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success'
                          })
                        } else {
                          Swal.fire({
                            title: 'Cancelled',
                            text: 'Your listing is safe',
                            icon: 'error'
                          })
                        }
                    })} basic color='red'>Delete</Button>
                  </div>
              }
              </div> 
            })
            : <WaitIndicator />
          }
          </>
          </Card.Group>
        </div>
        <WaitIndicator />
      </>
    )
  }
}

  // update/listing/:id
const mapStateToProps = state => {
  return {
    usersListings: state.userListings,
    pending: state.pending,
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
