import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { isAuthenticated, logOff } from 'authenticare/client'
const MySwal = withReactContent(Swal)

class Navbar extends React.Component {
  state={show:false}
  render () {
    return (
      <Menu size='huge' stackable={true}>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Header>TakeMe</Header>
          </Menu.Item>
          {/* So this next part basically is saying
              if its logged in and there is a username in the store show it
              else they need to log in
              That's not great bc when you reload the page there is not username
              in the store so it looks like you need to log in again even though
              you don't
              This is a temporary fix but if there is a way to use the token then
              we should definitely do that */}
          {(isAuthenticated() && (this.props.user.username !== undefined))
            ? <>
              <Menu.Item as={Link} to='/new-listing'>
                Create a Listing
              </Menu.Item>
              <Menu.Item as={Link} to={`/profile/${this.props.user.id}`}>
                <div className='profile-button'>
                  {this.props.user.firstName}
                  <img
                  style={{ borderRadius: '50%', maxHeight: '50px' }}
                  src={`https://res.cloudinary.com/takemenz/image/upload/${this.props.user.imageUrl}`}/>
                </div>
              </Menu.Item>
              <Menu.Item
                onClick={() => Swal.fire({
                  title: 'Are you sure?',
                  text: 'Are Yoy sure you want to log out?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Log Out',
                  cancelButtonText: 'No, Stay'
                }).then((result) => {
                  if (result.value) {
                    logOff()
                    this.props.history.push('/')
                  }
                })}
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
