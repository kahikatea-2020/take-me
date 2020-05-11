import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Header, Image, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { isAuthenticated, logOff } from 'authenticare/client'

const fontStyle = {
  fontSize: '16px'
}


class Navbar extends React.Component {
  
  render() {
    const profile = (
      <Menu.Item>
          <Image avatar alt='profile image' src={`https://res.cloudinary.com/takemenz/image/upload/${this.props.user.imageUrl}`} />
          {this.props.user.firstName}
      </Menu.Item>
    )
    return (
      <Menu borderless size='small' fixed='top' inverted color='green' style={{padding: '0 10vw 0 10vw'}}>
          <Menu.Item style={{ padding: '10px' }} position='left' as={Link} to='/' header>
            <Image size='small' src={'/logo-white.png'} />
          </Menu.Item>
          {/* So this next part basically is saying
              if its logged in and there is a username in the store show it
              else they need to log in
              That's not great bc when you reload the page there is not username
              in the store so it looks like you need to log in again even though
              you don't
              This is a temporary fix but if there is a way to use the token then
              we should definitely do that */}
        <Menu.Menu style={fontStyle} position='right'>
          {(isAuthenticated() && (this.props.user.username !== undefined))
            ? <>
              <Menu.Item as={Link} to='/new-listing'>
                Create a Listing
              </Menu.Item>
              <Dropdown simple trigger={profile} icon={null}>
                <Dropdown.Menu>
                  <Dropdown.Item style={{ paddingLeft: '10px' }} as={Link} to={`/profile/${this.props.user.id}`}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item style={{ margin: '0' }} as={Link} to='#' onClick={() => {
                    logOff()
                    this.props.history.push('/')
                  }}
                  >
                    Log Off
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
          </Menu.Menu>
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
