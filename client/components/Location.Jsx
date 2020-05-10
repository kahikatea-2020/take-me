import React from 'react'

class Location extends React.Component {
  render () {
    return (
      <div>
        <form>
          <h2>Address Form 1</h2>
          <table>
            <tr>
              <td className="label">Address Line 1</td>
              <td>
                <input type="search" className="addy-line1" id="address_line_1" placeholder="Start typing an address.." auto-complete/>
              </td>
            </tr>
            <tr>
              <td>Address Line 2</td>
              <td>
                <input type="text" className="addy-line2" id="address_line_2"/>
              </td>
            </tr>
            <tr>
              <td>Suburb</td>
              <td>
                <input type="text" className="addy-suburb" id="suburb"/>
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input type="text" className="addy-city" id="city"/>
              </td>
            </tr>
            <tr>
              <td>Postcode</td>
              <td>
                <input type="text" className="addy-postcode" id="postcode"/>
              </td>
            </tr>
          </table>
        </form>
      </div>
    )
  }
}

export default Location
