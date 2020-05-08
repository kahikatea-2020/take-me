import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Header } from 'semantic-ui-react'

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
              <Menu.Item as={Link} to='/profile'>
                Profile name
              </Menu.Item>
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

export default Navbar
