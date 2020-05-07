import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <>
        <Link to='/'>
          TakeMe
        </Link>
        {this.props.loggedIn
          ? <>
          <Link to='/profile'>
            <button className='profile'>
              Profile name
            </button>
          </Link>
          </>
          : <>
          <Link to='/login'>
            <button className='login-button'>
              Login
            </button>
          </Link>
          <Link to='/sign-up'>
            <button className='sign-up-button'>
              Sign Up
            </button>
          </Link>
          </>
        }
      </>
    )
  }
}

export default Navbar
