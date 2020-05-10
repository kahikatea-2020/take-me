import React from 'react'
import Slider from 'react-slick'
import { isAuthenticated } from 'authenticare/client'
import { connect } from 'react-redux'

import { getListingById } from '../api/listings'
import { Link } from 'react-router-dom'

class Listing extends React.Component {
  state = {
    listing: {},
    emailSubject: '',
    description: [],
    imageUrl: []
  }
  componentDidMount() {
    getListingById(this.props.match.params.id)
      .then(listing => {
        if (listing === undefined) {
          this.props.history.push(`/404`)
        } else {
          this.setState({
            listing,
            emailSubject: listing.name.split(' ').join('%20'),
            description: listing.description,
            imageUrl: listing.imageUrl
          })
        }
      })
  }
  render() {
    const { listing } = this.state
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides'
    }

    return (
      <>
        <div className="listingWrapper">
          <h2>{listing.name}</h2>
          {(this.state.imageUrl[0] !== undefined ) &&
            <div className='slick-carousel'>
              <Slider className='slick-image' {...settings}>
                {this.state.imageUrl.map((url, idx) => (
                  <img
                    key={idx}
                    className='slick-image'
                    src={`https://res.cloudinary.com/takemenz/image/upload/${url}`}
                    alt={listing.name}
                  />
                ))}
              </Slider>
            </div>
          }
          <div className='listing-description'>
            {this.state.description.map(sentence => <p key={sentence.substr(0, 10)}>{sentence}</p>)}
          </div>
        <div className='contactInfo'>
          <h4>Location: {listing.location}</h4>
          <h3>Contact {listing.userFirstName}</h3>
          <p>{listing.userPhoneNumber}</p>
          {(isAuthenticated() && (this.props.user.id === listing.userId)) &&
            <button className='updateListing'>
              <Link to={`/update-listing/${listing.id}`}>Edit Listing</Link>
            </button>
           }
        </div>
           <Link to={`/profile/${listing.userId}`} >User</Link>
          <button className='emailButton'>
            <a href={`mailto:${listing.userEmail}?subject=#${listing.id}:%20${this.state.emailSubject}`}>Email Dealer</a>
          </button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  }
}

export default connect(mapStateToProps)(Listing)
