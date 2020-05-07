import React from 'react'
import { Form } from 'semantic-ui-react'

class NewListing extends React.Component {
  constructor () {
    super()
    this.state = {
      listingName: '',
      description: [],
      category: '',
      location: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render () {
    return (
      <>
        <h1>Create a listing</h1>
        <p>Please fill in the following</p>
        <Form>

          <label>Listing Name</label>
          <input type="text" name="text" onChange={this.handleChange} />

          <label>Description</label>
          <input type="text" name="text" onChange={this.handleChange} />

          {/* maybe make it a dropdown */}
          <label>Location</label>
          <input type="text" name="text" onChange={this.handleChange} />

          {/* need to update category list lol */}
          <select className="ui search dropdown">
            <option value="">Category</option>
            <option value="Auto">Automotive</option>
            <option value="Clothes">Clothing</option>
            <option value="Elec">Electrical</option>
            <option value="Homeware">Homeware</option>
          </select>

          <label>Insert Image component hereee</label>
          <input type="text" name="text" onChange={this.handleChange} />

        </Form>

      </>
    )
  }
}

export default NewListing
