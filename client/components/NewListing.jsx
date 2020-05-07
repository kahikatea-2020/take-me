import React from 'react'
import { Form } from 'semantic-ui-react'

class NewListing extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render () {
    return (
      <>
        <Form>

          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />

        </Form>

        <select className="ui search dropdown">
          <option value="">Category</option>
          <option value="Auto">Automotive</option>
          <option value="Clothes">Clothing</option>
          <option value="Elec">Electrical</option>
          <option value="Homeware">Homeware</option>
        </select>
      </>
    )
  }
}

export default NewListing
