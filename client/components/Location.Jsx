import React from 'react'

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
    this.setState({ [evt.target.name]: evt.target.value })
    console.log(evt.target.value)
  }



  render () {
    return (
      <div>
        <form>
          <h2>Address Form </h2>
          <table>
            <tr>
              <td className="label">Street</td>
              <td>
                <input type="search" className="addy-line1" id="address_line_1" placeholder="Start typing an address.." name="street" required onChange={this.handleChange} auto-complete/>
              </td>
            </tr>
            <tr>
              <td>Suburb</td>
              <td>
                <input type="text" className="addy-suburb" id="suburb" name="suburb" required onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input type="text" className="addy-city" id="city" name="city" required onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td>Postcode</td>
              <td>
                <input type="text" className="addy-postcode" id="postcode" name="postcode" required onChange={this.handleChange} />
              </td>
            </tr>
          </table>
        </form>
      </div>
    )
  }
}

export default Location
