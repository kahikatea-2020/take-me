import React from 'react'
import { Form } from 'semantic-ui-react'

class updateListing extends React.Component {
  render () {
    return (
      <>
        <h1>Update Listing</h1>
        <Form>
          <div className="ui form">
            <div className="field">
              <label>Listing Name</label>
              <input type="text"/>
            </div>
            <div className="field">
              <label>Description</label>
              <textarea></textarea>
            </div>
            <div className="field">
              <label></label>
              <input type="text"/>
            </div>
          </div>
        </Form>
      </>
    )
  }
}

export default updateListing
