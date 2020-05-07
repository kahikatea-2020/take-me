import React from 'react'

class NewListing extends React.Component {
  state = {
    listingName: '',
    description: [],
    Category: 
  }

  componentDidMount () {
  }

  render() {
    return (
      <div>
        <select class="ui search dropdown">
            <option value="">State</option>
            <option value="Auto">Automotive</option>
            <option value="Clothes">Clothing</option>
            <option value="Elec">Electrical</option>
            <option value="Homeware">Homeware</option>
        </select>
      </div>
    )
  }
}

export default NewListing