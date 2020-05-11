import React from 'react'
import { Form } from 'semantic-ui-react'
import { getAddress } from '../api/addy'

class Location extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      street: '',
      suburb: '',
      city: '',
      postcode: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({street: evt.target.value})
    console.log(evt.target.value)
    getAddress(event.target.value)
      .then(res => {
        console.log(res)
        // this.setState({street: res.a[0]})
      })
  }

  render () {
    return (
      <div>
        <Form>
          <h2>Address Form </h2>
          <table>
            <tr>
              <td className="label">Street</td>
              <td>
                <input type="search" className="addy-line1" id="address_line_1" placeholder="Start typing an address.." name="street" required onChange={this.handleChange} value={this.state.street} auto-complete/>
              </td>
            </tr>
            <tr>
              <td>Suburb</td>
              <td>
                <input type="text" className="addy-suburb" id="suburb" name="suburb" required onChange={this.handleChange} value={this.state.suburb} />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input type="text" className="addy-city" id="city" name="city" required onChange={this.handleChange} value={this.state.city} />
              </td>
            </tr>
            <tr>
              <td>Postcode</td>
              <td>
                <input type="text" className="addy-postcode" id="postcode" name="postcode" required onChange={this.handleChange} value={this.state.postcode}/>
              </td>
            </tr>
          </table>
          <Form.Button type='submit' onClick={this.submitHandler}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Location
