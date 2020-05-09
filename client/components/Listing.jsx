import React from 'react'

import { getListingById } from '../api/listings'

class Listing extends React.Component {
  state = {
    listing: {},
    emailSubject: '',
    description: [],
    imageUrl: []
  }
  componentDidMount () {
    getListingById(this.props.match.params.id)
      .then(listing => {
        if(listing === undefined) {
          this.props.history.push(`/404`)
        }
        this.setState({
          listing,
          emailSubject: listing.name.split(' ').join('%20'),
          description: listing.description,
          imageUrl: listing.imageUrl
        })
      })
  }
  render () {
    const { listing } = this.state

    return (
      <>
      <div className="listingWrapper">
        <h2>{listing.name}</h2>
        <img
          style={{ maxWidth: '400px' }}
          src={`https://res.cloudinary.com/takemenz/image/upload/${this.state.imageUrl[0]}`}
          alt={listing.name} 
        /> {/* currently just using the first picture link in the array, needs to be a carousel :) */}
        {this.state.description.map(sentence => <p key={sentence.substr(0, 10)}>{sentence}</p>)}
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
