import React from 'react'

import { getListingById } from '../api/listings'

class Listing extends React.Component {
  state = {
    listing: {},
    emailSubject: '',
    description: []
  }
  componentDidMount () {
    getListingById(this.props.match.params.id)
      .then(listing => {
        this.setState({
          listing,
          emailSubject: listing.name.split(' ').join('%20'),
          description: listing.description
        })
      })
  }
  render () {
    const { listing } = this.state

    return (
      <>
      <div className="listingWrapper">
        <h2>{listing.name}</h2>
        <img style={{ maxWidth: '400px' }} src={listing.imageUrl} alt={listing.name} />
        {this.state.description.map(sentence => <p>{sentence}</p>)}
      </div>
      <div className='contactInfo'>
        <h4>Location: {listing.location}</h4>
        <h3>Contact {listing.userFirstName}</h3>
        <p>{listing.userPhoneNumber}</p>
        <button className='emailButton'>
          <a href={`mailto:${listing.userEmail}?subject=#${listing.id}:%20${this.state.emailSubject}`}>Email Dealer</a>
        </button>
      </div>
      </>
    )
  }
}

export default Listing

// https://tylermcginnis.com/react-router-cannot-get-url-refresh/

// // [{
//   "id":1,
//   "name":"Soccer Ball",
//   "description":"[\"Moving house and we don't use this ball anymore\",\"Free to a good home!\"]",
//   "imageUrl":"/soccer_ball.jpg",
//   "userId":1,
//   "categoryId":7,
//   "userFirstName":"John",
//   "userLastName":"Sengson",
//   "userImage":"john.jpg",
//   "userPhoneNumber":"021-435-1234",
//   "userEmail":"john@gmail.com",
//   "userLocation":"Auckland"}]
