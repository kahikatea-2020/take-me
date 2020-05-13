import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Error404 extends React.Component {
  render () {
    return (
      <div id='wrapper'>
        <h1 style={{ color: 'red' }}>Page not found!</h1>
        <h2>Sorry, we can't find the page you requested.</h2>
        <h3>You may have clicked on a broken link or entered an incorrect URL.</h3>
        <Button id='home' as={Link} to='/' >Home</Button>
        <Button id='home' as='a' onClick={() => this.props.history.goBack()} to='/' >Back</Button>
      </div>
    )
  }
}

export default Error404
