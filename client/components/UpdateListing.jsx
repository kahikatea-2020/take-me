import React from 'react'
import SweetAlert from 'sweetalert2-react'
import { Form, List } from 'semantic-ui-react'
import { editListing } from '../api/listings'
import { getListingById } from '../api/listings'
import { openUploadWidget } from './CloudinaryService'
import { hideError, showError } from '../actions/error'
import { connect } from 'react-redux'

class UpdateListing extends React.Component {
  constructor (props) {
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

  handleDescriptionChange = (evt) => {
    const arr = evt.target.value.split("\n")
    this.setState({description: arr}, console.log(this.state.description))
  }

  handleChange = evt => {
    console.log('handlechange')
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

  componentWillMount () {
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

  getListingDetails(){
    let listingId = this.props.match.params.id
    getListingById(listingId)
    .then(listing => {
      console.log(listing)
      if(listing === undefined) {
        this.props.history.push(`/404`)
      }
      this.setState({
        listing,
        name: listing.name,
        description: listing.description,
        location: listing.location,
        imageUrl: listing.imageUrl
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

    submitHandler = () => {
      this.props.dispatch(hideError())
      if(this.inputChecker()){
        let listingId = this.props.match.params.id
        if (!this.state.imageUrl[0]) {
          this.setState({
            imageUrl: [...this.state.imageUrl, 'v1589063179/default-listing_pgdcsc.png']
          }, () => {
            console.log(this.state)
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
    }

  render () {
    return (
      <>
        <h1>Update Listing</h1>
        <Form>
          <div className="ui form">
            <div className="field">
              <label>Listing Name</label>
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>Description</label>
              <input type="text" name="description" onChange={this.handleDescriptionChange} value={this.state.description} />
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>Location</label>
              <input type="text" name="location" onChange={this.handleChange} value={this.state.location} />
            </div>
          </div>
          <Form.Button onClick={() => this.imageUpload()}>Upload Image</Form.Button>
            {this.state.imageUrl[0] &&
            <div className='imagesPreview'>
              {this.state.imageUrl.map((img, idx) => {
              return (
                <div className='singleImagePreview'>
                  <div style={{height: '40px', width: '40px', marginLeft: '110px'}}>
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
                  <div>
                    <img className='theImage' src={`https://res.cloudinary.com/takemenz/image/upload/${img}`}/>
                  </div>
                </div>
              )})}
            </div>
            }
          <Form.Button
              type='submit'
              onClick={this.submitHandler}
            >
              Submit
          </Form.Button>
        </Form>
        <SweetAlert
          show={this.state.show}
          title="Oppsie, Something went wrong!"
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

export default connect(mapStateToProps)(updateListing)
