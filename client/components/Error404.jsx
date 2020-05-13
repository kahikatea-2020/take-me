import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Error404 extends React.Component {
  render () {
    return (
      <div id='wrapper'>
        <h1 style={{ color: 'red' }}>Page not found!</h1>
        <p>Sorry, we can't find the page you requested.</p>
        <p>You may have clicked on a broken link or entered an incorrect URL.</p>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Error404
