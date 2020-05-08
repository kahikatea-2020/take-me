import React from 'react'
import { Form } from 'semantic-ui-react'
import { getAllCategory } from '../api/category'

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

  componentDidMount () {
    getAllCategory()
      .then()
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

          {/* maybe make it a dropdown? */}
          <label>Location (maybe make a drop down as well?) </label>
          <input type="text" name="text" onChange={this.handleChange} />

          {/* need to update category list */}
          <select className="ui search dropdown">
            { this.state.categories.map(category => {
              return (
                <option key={category.id} value={category.name}></option>
              )
            })
            }
          </select>

          <label>Insert Image component hereee</label>
          <input type="text" name="text" onChange={this.handleChange} />

          <Form.Button
            type='submit'
            onClick={this.submitHandler}
          >
            Submit
          </Form.Button>

        </Form>

      </>
    )
  }
}

export default NewListing
