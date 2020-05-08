import React from 'react'
// import { Ui, Card } from 'semantic-ui-react'
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
        <div class="ui card">
          <div class="image">
          <img src={`https://res.cloudinary.com/takemenz/image/upload/${user.imageUrl}`} alt=""/>
          </div>
          <div class="content">
            <a class="header" href="#">{user.username}</a>
            <div class="meta">
              <a href='#'>{user.location}</a>
            </div>
          </div>
        </div>
        
      </>
    )
  }
}

export default Profile
