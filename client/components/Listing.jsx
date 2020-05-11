import React from 'react'
import Slider from 'react-slick'
import { isAuthenticated } from 'authenticare/client'
import { connect } from 'react-redux'
import { Button, Image, Card, Grid } from 'semantic-ui-react'

import WaitIndicator from './WaitIndicator'

import { getListingById } from '../api/listings'
import { getListingsPending, getListingSuccess } from '../actions/listings'
import { Link } from 'react-router-dom'

class Listing extends React.Component {
  state = {
    listing: {},
    emailSubject: '',
    description: [],
    imageUrl: []
  }
  componentDidMount() {
    this.props.dispatch(getListingsPending())
    getListingById(this.props.match.params.id)
      .then(listing => {
        this.props.dispatch(getListingSuccess())
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
      adaptiveHeight: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides'
    }

    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
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
          </Grid.Column>
          <Grid.Column>
          <div className='listing-description'>
            <h1>{listing.name}</h1>
            {this.state.description.map(sentence => <p key={sentence.substr(0, 10)}>{sentence}</p>)}
          </div>
        <div className='contact-info'>
          <h4>Location: {listing.location}</h4>
              <Card>
                <Card.Content>
                  <Image
                    circular
                    floated='right'
                    size='mini'
                    src={`https://res.cloudinary.com/takemenz/image/upload/${listing.userImage}`}
                  />
                  <Card.Header>Contact {listing.userFirstName}</Card.Header>
                  <Card.Description>
                    Phone: {listing.userPhoneNumber}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button className='email-button'>
                      <a href={`mailto:${listing.userEmail}?subject=#${listing.id}:%20${this.state.emailSubject}`}>Email</a>
                    </Button>
                    {/* <Link to={`/profile/${listing.userId}`} > */}
                      <Button as={Link} to={`/profile/${listing.userId}`}>
                        View Profile
                      </Button>
                    {/* </Link> */}
                  </div>
                </Card.Content>
              </Card>
          {(isAuthenticated() && (this.props.user.id === listing.userId)) &&
            <button className='updateListing'>
              <Link to={`/update-listing/${listing.id}`}>Edit Listing</Link>
            </button>
           }
        </div>
          <br />
          {(isAuthenticated() && (this.props.user.id === listing.userId)) &&
            <Link to={`/profile/${listing.userId}`} ><button>Your listings</button></Link>
          }
        <WaitIndicator />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
