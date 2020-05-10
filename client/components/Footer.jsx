import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render () {
    return (
      <>
        <Menu id="footer">
          <Container>
            <Menu.Item as={Link} to='/login'>
              Login
            </Menu.Item>
            <Menu.Item as={Link} to='/sign-up'>
              Sign Up
            </Menu.Item>
          </Container>
        </Menu>
      </>
    )
  }
}

export default Footer
