import React from 'react'

import { getUserById } from '../api/users'

class Profile extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    image_url: '',
    location: ''
  }

  componentDidMount () {
    getUserById(this.props.match.params.id)
      .then(user => {
        this.setState({
          user,

        })
      })
  }

  render () {
    const { user } = this.state

    return (
      <>
        <div className="profileWrapper">
          <h2>{user}</h2>
        </div>
      </>
    )
  }
}

export default Profile
