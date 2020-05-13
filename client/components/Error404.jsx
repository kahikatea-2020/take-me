import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Error404 extends React.Component {
  render () {
    return (
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="search icon"></i>
          <h1>404</h1>
        </div>
        <div className="inline">
          <div className="ui primary button">Clear Query</div>
          <div className="ui button">Add Document</div>
        </div>
      </div>
    )
  }
}

export default Error404
