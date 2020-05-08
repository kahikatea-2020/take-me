import React from 'react'

import { getUserById } from '../api/users'

class Profile extends React.Component {
  state = {
    user: {}
  }

  componentDidMount () {
    getUserById(this.props.match.params.id)
      .then(user => {
        this.setState({
          user
        })
      })
  }

  render () {
    const { user } = this.state

    return (
      <>
        <div className="profileWrapper">
          <h2>{user.firstName} {user.lastName}</h2>
          <h3>{user.username}</h3>
          <img src={`https://res.cloudinary.com/takemenz/image/upload/${user.imageUrl}`} alt=""/>
          <p>{user.location}</p>
        </div>
      </>
    )
  }
}

export default Profile
