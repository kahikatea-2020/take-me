import React from 'react'
import SweetAlert from 'sweetalert2-react'
import { Form, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { editListing } from '../api/listings'
import { getListingById } from '../api/listings'
import { openUploadWidget } from './CloudinaryService'
// import { userPending, userSuccess } from '../actions/users'
import { hideError, showError } from '../actions/error'
import { connect } from 'react-redux'
import Autocomplete from './Autocomplete'
import WaitIndicator from './WaitIndicator'

class UpdateListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: {},
      name: '',
      description: [],
      location: '',
      imageUrl: [],
      show: false
    }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  imageUpload = tag => {
    const uploadOptions = {
      cloudName: 'takemenz',
      tags: [tag],
      uploadPreset: 'nxxqgset'
    }

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          this.setState({
            imageUrl: [...this.state.imageUrl, photos.info.path]
          })
        }
      }
    })
  }

  deleteImage = (idx) => {
    const newImgUrl = [...this.state.imageUrl]
    newImgUrl.splice(idx, 1)
    this.setState({
      imageUrl: newImgUrl
    })
  }

  componentWillMount() {
    this.getListingDetails()
  }

  inputChecker = () => {
    const { name, description, location } = this.state
    if (name !== '' && description !== '' && location !== '') {
      return true
    } else {
      return false
    }
  }

  getListingDetails() {
    let listingId = this.props.match.params.id
    getListingById(listingId)
      .then(listing => {
        if (listing === undefined) {
          this.props.history.push(`/404`)
        }
        this.setState({
          listing,
          name: listing.name,
          description: listing.description.join('\n'),
          location: listing.location,
          imageUrl: listing.imageUrl
        })
      })
      .catch(err => console.log(err));
  }

  submitHandler = () => {
    this.setState({description: this.state.description.split('\n')}, () => {
      this.props.dispatch(hideError())
      if (this.inputChecker()) {
        let listingId = this.props.match.params.id
        if (!this.state.imageUrl[0]) {
          this.setState({
            imageUrl: [...this.state.imageUrl, 'v1589063179/default-listing_pgdcsc.png']
          }, () => {
            editListing(this.props.match.params.id, this.state)
              .then(id => {
                this.props.history.push(`/listings/${listingId}`)
              })
          })
        } else {
          editListing(this.props.match.params.id, this.state)
            .then(id => {
              this.props.history.push(`/listings/${listingId}`)
            })
        }
      } else {
        this.props.dispatch(showError('Please fill out all the fields'))
        this.setState({ show: true })
      }
    })
  }

  render() {
    return (
      <>
        <h1>Update Listing</h1>
        <WaitIndicator />
        <Form>
          <Form.Input
            width={6}
            type='text'
            name='name'
            label='Listing Title'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Form.TextArea
            width={8}
            type='text'
            name='description'
            label='Description'
            onChange={this.handleChange}
            value={this.state.description}
          />
          <Autocomplete prevAddress={this.state.location} />
          <Form.Button onClick={() => this.imageUpload()}>
            Upload Image
          </Form.Button>
          {this.state.imageUrl[0] &&
            <div className='imagesPreview'>
              {this.state.imageUrl.map((img, idx) => {
                return (
                  <div className='singleImagePreview'>
                    <div>
                      <img className='theImage' src={`https://res.cloudinary.com/takemenz/image/upload/${img}`} />
                    </div>
                    <div>
                      <button onClick={e => {
                        e.preventDefault()
                        return this.deleteImage(idx)
                      }}>
                        <img
                          src='/trash-can.png'
                          alt='delete button'
                          className='deleteButton'
                        />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          }
          <Form.Group id='update-listing-buttons'>
            <Link to='/'>
              <Form.Button>
                Cancel
              </Form.Button>
            </Link>
            <Form.Button
              type='submit'
              onClick={this.submitHandler}
            >
              Submit
            </Form.Button>
          </Form.Group>
        </Form>
        <SweetAlert
          show={this.state.show}
          title="Oops, something went wrong!"
          text={this.props.error}
          onConfirm={() => this.setState({ show: false })}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(UpdateListing)
