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
        
        
      </>
    )
  }
}

export default Profile
