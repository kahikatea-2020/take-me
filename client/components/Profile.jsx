import React from 'react'
import { connect } from 'react-redux'
// import { Ui, Card } from 'semantic-ui-react'
import { getUserById } from '../api/users'
import { getUsersListings } from '../actions/listings'
import WaitIndicator from './WaitIndicator'

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

  render () {
    const { user } = this.state

    return (
      <>
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
          {console.log(this.props)}
          {this.props.usersListings.length !== 0 && <> 
          {this.props.usersListings.map(listing => {
            return <div className="ui card" key={listing.id}>
              <p>name: {listing.name}</p>
              <p>decription: {listing.decription}</p>
              <p>location: {listing.location}</p>
              <div className="image">
                <img src={`https://res.cloudinary.com/takemenz/image/upload/${listing.imageUrl}`} alt={listing.name} />
              </div>
            </div>
          })}
          </> 
          
          }
          
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    usersListings: state.userListings,
    pending: state.pending
  }
}

export default connect(mapStateToProps)(Profile)

{/* {
            this.props.userListings.map(listing => {
              return <p>Hi</p>
            })
          } */}