import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    loggedIn: false
  }

  render () {
    return (
      <>
        <Link to='/'>
          TakeMe
        </Link>
        {/* if loggedIn is true: */}
        {this.state.loggedIn
          ? <>
          <Link to='/profile'>
            Profile name
          </Link>
          </>
          // if loggedIn is false:
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
