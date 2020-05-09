import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { isAuthenticated, logOff } from 'authenticare/client'

class Navbar extends React.Component {
  render () {
    return (
      <Menu>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Header>TakeMe</Header>
          </Menu.Item>
          {isAuthenticated()
            ? <>
              <Menu.Item as={Link} to='/new-listing'>
                Create a Listing
              </Menu.Item>
                {(this.props.user.username !== undefined)
                  ?<Menu.Item as={Link} to={`/profile/${this.props.user.id}`}>
                    <div className='profile-button'>
                      <p>{this.props.user.username}</p>
                      <img
                      style={{ borderRadius: '50%', maxHeight: '50px' }}
                      src={`https://res.cloudinary.com/takemenz/image/upload/${this.props.user.image_url}`}/>
                    </div>
                    </Menu.Item>
                  : <p>Profile</p>}
              <Menu.Item
                as={Link}
                to='#'
                onClick={logOff}
              >
                Log Off
              </Menu.Item>
            </>
            : <>
              <Menu.Item as={Link} to='/login'>
              Login
              </Menu.Item>
              <Menu.Item as={Link} to='/sign-up'>
              Sign Up
              </Menu.Item>
            </>
          }
        </Container>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)
