import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Card, Button, Image, Header, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import WaitIndicator from './WaitIndicator'
import ProfileListItem from './ProfileListItem'

import { getUserById } from '../api/users'
import { getUsersListings } from '../actions/listings'

class Profile extends React.Component {
  state = {
    profile: {}
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

  componentWillReceiveProps(nextProps) {
    const newId = nextProps.match.params.id;
    if(this.state.profile.id != newId) {
      getUserById(newId)
      .then(profile => {
        this.props.dispatch(getUsersListings(newId))
          this.setState({
            profile
          })
      })
    }
  }

  render () {
    const { profile } = this.state
    const listing = this.props.usersListings.map(listing => ({
      ...listing,
      userImage: profile.imageUrl
    }))
    const currentListings = listing.filter(item => !item.taken)
    const takenListings = listing.filter(item => item.taken)
    
    return (
      <>
        <div style={{ height: '300px' }} className="ui right aligned grid">
          <div style={{ height: '300px' }} className="center aligned two column row">
            <div className="column">
              <Image style={{ width: '200px', float: 'right' }} src={`https://res.cloudinary.com/takemenz/image/upload/${profile.imageUrl}`} alt="Profile Photo" />
            </div>
            <div className="column left aligned row">
              <div className='row'>
                <div style={{ verticalAlign: 'middle' }}>
                  <h2 style={{ marginBottom: '0px' }}>{profile.firstName} {profile.lastName}</h2>
                  <em>{profile.username}</em><br />
                  <br />
                  <p>Email: {profile.email}</p>
                  <p>Phone Number: {profile.phoneNumber}</p>
                  <p>Location: {profile.location}</p>
                  {(isAuthenticated() && (this.props.user.id === profile.id)) &&
                    <Button id='edit-profile' as={Link} to={`/edit-profile/${profile.id}`} basic color='blue'>Edit Profile</Button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        { isAuthenticated() && (this.props.user.id === profile.id)
          ? <h2>Your Current Listings</h2>
          : <h2>Current Listings from {profile.firstName}</h2>
        }
          
        { (currentListings.length !== 0)
          ? <Card.Group  className='centered'>
              {currentListings.map(userListing => <ProfileListItem key={userListing.id} listing={userListing} current={true} history={this.props.history} authenticated={isAuthenticated() && (this.props.user.id === profile.id)}/>)}
            </Card.Group>
          : <p>This user has no current listings</p>
        }
          
        <h2 id='prev'>Previous Listings</h2>
        <Card.Group className='centered'>
        { (takenListings.length !== 0)
          ? <Card.Group className='centered'>
              {takenListings.map(userListing => <ProfileListItem key={userListing.id} listing={userListing} current={false} history={this.props.history} authenticated={isAuthenticated() && (this.props.user.id === profile.id)}/>)}
            </Card.Group>
        : <p>This user has no previous listings</p>
        }
        </Card.Group>

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
