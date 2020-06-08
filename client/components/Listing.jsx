import React from 'react'
import Slider from 'react-slick'
import { isAuthenticated } from 'authenticare/client'
import { connect } from 'react-redux'
import { Button, Card, Grid, Image, Form } from 'semantic-ui-react'
import Swal from 'sweetalert2'

import WaitIndicator from './WaitIndicator'
import Mapbox from './Mapbox'

import { getListingById, markAsTaken } from '../api/listings'
import { getCommentsById, addComment } from '../api/q-and-a'
import { getListingsPending, getListingSuccess } from '../actions/listings'
import { getCommentsPending, getCommentsSuccess } from '../actions/q-and-a'
import { Link } from 'react-router-dom'

class Listing extends React.Component {
  state = {
    listing: {},
    emailSubject: '',
    description: [],
    imageUrl: [],
    comments: [],
    newComment: '',
    taken: false,
    date_taken: ''
  }

  componentDidMount() {
    this.props.dispatch(getListingsPending())
    getListingById(this.props.match.params.id)
      .then(listing => {
        this.props.dispatch(getListingSuccess(listing))
        if (listing === undefined) {
          this.props.history.push(`/404`)
        } else {
          this.setState({
            listing,
            emailSubject: listing.name.split(' ').join('%20'),
            description: listing.description,
            imageUrl: listing.imageUrl,
            taken: listing.taken,
          }, this.getComments)
        }
      })
  }

  getComments = () => {
    this.props.dispatch(getCommentsPending())
    getCommentsById(this.props.match.params.id)
      .then(comments => {
        this.props.dispatch(getCommentsSuccess())
        this.setState({
          comments
        })
      })
  }
  setNameColour = (id) => {
    if (id === this.state.listing.userId) {
      return { color: 'rgb(33, 133, 208)' }
    } else {
      return {}
    }
  }

  updateField = e => {
    this.setState({
      newComment: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    if (this.state.newComment !== '') {
      const newCommentObject = {
        comment: this.state.newComment,
        userId: this.props.user.id,
        listingId: this.state.listing.id
      }
      addComment(newCommentObject)
        .then(this.getComments)
        .then(this.setState({ newComment: '' }))
    }
  }

  handleTaken = () => {
    markAsTaken(this.state.listing.id)
      .then(res => {
        if (res === 'success') {
          this.setState({ taken: true })
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
      <>
      <Grid columns={2} divided>
        <Grid.Row id='row-target'>
          <Grid.Column stretched className='listing-images'>
            {(this.state.imageUrl[0] !== undefined) &&
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
          <Grid.Column stretched className='listing-details'>
            <div className='listing-description'>
              {(isAuthenticated() && (this.props.user.id === listing.userId)) && 
                <div className='column'>
                  <Button id='update' style={{ maxHeight: '5vh', maxWidth: '50%' }} as={Link} to={`/update-listing/${listing.id}`} className='update-listing' basic color='blue'>
                    Update Listing
                  </Button>
                  {!this.state.taken &&
                    <Button name={listing.id} onClick={() => Swal.fire({
                      title: 'Are you sure?',
                      text: 'You cannot undo this.',
                      icon: 'warning',
                      confirmButtonText: 'Yes, mark as taken',
                      cancelButtonText: 'No, keep it listed',
                      showCancelButton: true
                      }).then((result) => {
                        if (result.value) {
                          this.handleTaken()
                          Swal.fire({
                            title: 'Taken!',
                            text: 'Your item has been marked as taken',
                            icon: 'success'
                          })
                        } else {
                          Swal.fire({
                            title: 'Cancelled',
                            text: 'Your listing is still active',
                            icon: 'error'
                          })
                        }})} basic color='blue'>
                    Mark as Taken
                  </Button>
                  }
                </div>
              }
              <h1>{listing.name}</h1>
              <h4>Location: {listing.location}</h4>
              {this.state.description.map(sentence => <p key={sentence.substr(0, 10)}>{sentence}</p>)}
            </div>
            <div className='contact-info'>
              <Card>
                <Card.Content>
                  <Image
                    circular
                    floated='right'
                    src={`https://res.cloudinary.com/takemenz/image/upload/${listing.userImage}`}
                  />
                  <Card.Content id='contact-deetz'>
                    <Card.Header>Contact {listing.userFirstName}</Card.Header>
                    <Card.Meta>
                      Phone: {listing.userPhoneNumber}
                    </Card.Meta>
                  </Card.Content>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui-two-buttons'>
                    <Button id='email'>
                      <a href={`mailto:${listing.userEmail}?subject=#${listing.id}:%20${this.state.emailSubject}`}>Email</a>
                    </Button>
                    <Button id='profile' as={Link} to={`/profile/${listing.userId}`}>
                      View Profile
                    </Button>
                    </div>
                  </Card.Content>
                </Card>
              </div>
              <Mapbox />
              <WaitIndicator />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        {(this.state.comments.length > 0) &&
          <div className='questions-and-answers'>
            {this.state.comments.map(comment => (
              <div className='comment'>
                <Image
                  circular
                  floated='left'
                  width='20px'
                  src={`https://res.cloudinary.com/takemenz/image/upload/${comment.userImage}`}
                />
                <h5 style={this.setNameColour(comment.userId)}>{comment.userFirstName}</h5>
                <p>{comment.comment}</p>
                <small>{comment.date.substr(0, 21)}</small>
              </div>
            ))}
          </div>
        }
        {isAuthenticated() 
          ? <Form id='q-a-form'>
            {(this.props.user.id === listing.userId)
            ? (this.state.comments.length > 0)
              ? <label>Reply or add a comment</label>
              : <label>Add a comment</label>
            : <label>Ask a question</label>
            }
            <Form.Input
              onChange={this.updateField}
              fluid
              required
              width={8}
              name='comment'
              placeholder=''
              type='text'
              value={this.state.newComment}
            />
            <Form.Button
              type='submit'
              onClick={this.submitHandler}
            >
            Submit
            </Form.Button>
          </Form>
          : <h4><em><Link to='/login'>Log in</Link> to ask a question</em></h4>
        }
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
