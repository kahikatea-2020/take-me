import React from 'react'
import Slider from 'react-slick'

import { getListingById } from '../api/listings'

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
        }
        this.setState({
          listing,
          emailSubject: listing.name.split(' ').join('%20'),
          description: listing.description,
          imageUrl: listing.imageUrl
        })
      })
  }
  render() {
    const { listing } = this.state

    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      adaptiveHeight: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides'
    }

    const imgUrls = [
      'https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg',
      'https://i.ytimg.com/vi/kJ2dr9jAThY/maxresdefault.jpg',
      'https://i.pinimg.com/originals/dd/59/4e/dd594e241abf617abed2b7d586c19ef9.jpg'
    ]

    return (
      <>
        <div className="listingWrapper">
          <h2>{listing.name}</h2>
          <div className='slick-carousel'>
            <Slider className='slick-image' {...settings}>
              {/* {this.state.imageUrl.map((url, idx) => { */}
              {imgUrls.map((url, idx) =>
                <img
                  key={idx}
                  className='slick-image'
                  // src={`https://res.cloudinary.com/takemenz/image/upload/${url}`}
                  src={`${url}`}
                  alt={listing.name}
                />
              )}
            </Slider>
          </div>
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
