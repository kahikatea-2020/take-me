import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
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
        <div className="ui two columns">
          <Image src={ profile.imageUrl ? `https://res.cloudinary.com/takemenz/image/upload/${profile.imageUrl}` : ''} alt="Profile Photo"/>
          <Header as='h2'>
            {profile.firstName} {profile.lastName}
            <Header.Subheader>{profile.username}</Header.Subheader>
            <Header.Subheader>{profile.email}</Header.Subheader>
            <Header.Subheader>{profile.phoneNumber}</Header.Subheader>
            <Header.Subheader>{profile.location}</Header.Subheader>
          </Header>
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
