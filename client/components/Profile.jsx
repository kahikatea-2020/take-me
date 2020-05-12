import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
import WaitIndicator from './WaitIndicator'
import ListItem from './ListItem'

import { getUserById } from '../api/users'
import { userPending, userSuccess } from '../actions/users'
import { getUsersListings } from '../actions/listings'
import { deleteListingById } from '../api/listings'

const MySwal = withReactContent(Swal)

class Profile extends React.Component {
  state = {
    user: {},
  }

  componentWillMount () {
    this.props.dispatch(getUsersListings(this.props.match.params.id))
  }

  componentDidMount () {
    getUserById(this.props.match.params.id)
    .then(user => {
      if(user !== null){
        this.setState({
          user
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
        // this.props.dispatch(userSuccess())
        this.props.dispatch(getUsersListings(this.props.match.params.id))
      })
  }

  render () {
    const { user } = this.props
    const listing = this.props.usersListings.map(listing => ({
      ...listing,
      userImage: user.imageUrl
    }))
    return (
      <>
        <div className="ui two columns">
          <Image src={`https://res.cloudinary.com/takemenz/image/upload/${user.imageUrl}`} alt="Profile Photo"/>
          <Header as='h2'>
            {user.firstName} {user.lastName}
            <Header.Subheader>{user.username}</Header.Subheader>
            <Header.Subheader>{user.email}</Header.Subheader>
            <Header.Subheader>{user.phoneNumber}</Header.Subheader>
            <Header.Subheader>{user.location}</Header.Subheader>
          </Header>
        </div>
        <div>
          <h2>Your Listings</h2>
          <Card.Group itemsPerRow={4} className='centered'>
          {listing.length !== 0 
          ? <> 
          {listing.map(l => {
            return <div className="ui card" key={l.id}>
              <ListItem key={l.id} listing={l}/>
              {
                isAuthenticated() && user.id === l.userId &&
                  <div className='ui two buttons'>
                    <Button as='a' to={`/update-listing/${l.id}`} basic color='blue'>Update</Button>
                    <Button onClick={() => Swal.fire({
                        title: 'Are you sure?',
                        text: 'Are you sure you want to delete this item!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it',
                        cancelButtonText: 'No, keep it!'
                      }).then((result) => {
                        if (result.value) {
                          this.handleDelete(l.id)
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
          })}
          </> 
          : <WaitIndicator />
          }
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
