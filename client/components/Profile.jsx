import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
// import { Ui, Card } from 'semantic-ui-react'
import { getUserById } from '../api/users'
import { userPending, userSuccess } from '../actions/users'
import { getUsersListings } from '../actions/listings'
import WaitIndicator from './WaitIndicator'
import { deleteListingById } from '../api/listings'
import { Link } from 'react-router-dom'

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

  handleDelete = event => {
    const id = event.target.name
    this.props.dispatch(userPending())
    deleteListingById(id)
      .then (() => {
        // this.props.dispatch(userSuccess())
        this.props.dispatch(getUsersListings(this.props.match.params.id))
      })
  }

  render () {
    const { user } = this.state

    return (
      <>
      <div id="wrapper">
        <div className="ui card">
          <div className="image">
            <img src={`https://res.cloudinary.com/takemenz/image/upload/${user.imageUrl}`} alt=""/>
          </div>
          <div className="content">
            <a className="header" href="#">{user.username}</a>
            <div className="meta">
              <a href='#'>{user.location}</a>
            </div>
          </div>
        </div>
        <div>
          <h2>Your Listings</h2>
          {this.props.usersListings.length !== 0 
          ? <> 
          {this.props.usersListings.map(listing => {
            return <div className="ui card" key={listing.id}>
              <p><Link to={`/listings/${listing.id}`}>name: {listing.name}</Link></p>
              {/* <p>decription: {listing.description}</p> */}
              <p>location: {listing.location}</p>
              <div className="image">
                <img src={`https://res.cloudinary.com/takemenz/image/upload/${listing.imageUrl[0]}`} alt={listing.name} />
              </div>
              {(isAuthenticated() && (this.props.user.id === listing.userId)) && <>
              <button name={listing.id} onClick={this.handleDelete}>Taken</button>
              <Link to={`/update-listing/${listing.id}`}><button>Update</button></Link>
              </>}
            </div> 
          })}
          </> 
          : <WaitIndicator />
          }
        </div>
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
