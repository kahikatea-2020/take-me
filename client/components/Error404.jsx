import React from 'react'

class Error404 extends React.Component {
  render () {
    return (
      <>
        <h1 style={{ color: 'red' }}>Page not found</h1>
        <p>Sorry we can not find the page you requested.</p>
        <p>You may have clicked on a broken link or entered a incorrect URL</p>
      </>
    )
  }
}

export default Error404