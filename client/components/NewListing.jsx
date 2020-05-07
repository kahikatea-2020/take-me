import React from 'react'

class NewListing extends React.Component {
  state = {
    listingName: '',
    description: [],
    category: '',
    location: '',
    image: ''
  }

  updateListingName = e => {
    this.setState({
      listingName: e.target.value
    })
  }

  updateDescription = e => {
    this.setState({
      description: e.target.value
    })
  }

  updateLocation = e => {
    this.setState({
      location: e.target.value
    })
  }

  // image function

  // dropdown cat function meow

  render () {
    return (
      <div>
        <select className="ui search dropdown">
          <option value="">Category</option>
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
