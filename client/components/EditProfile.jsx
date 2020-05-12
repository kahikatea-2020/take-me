import React from 'react'
import { Form } from 'semantic-ui-react'
import { openUploadWidget } from './CloudinaryService'
import { isAuthenticated, register } from 'authenticare/client'
import { Link } from 'react-router-dom'
import { getUserDetails } from '../actions/users'
import { BASE_API_URL } from '../base-api.js'
import { connect } from 'react-redux'



import Autocomplete from './Autocomplete'

class EditProfile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    imageUrl: 'v1589061239/default-profile_checno.png',
    uploadedImage: false,
    location: ''
  }

  imageUpload = (tag, preset) => {
    const uploadOptions = {
      cloudName: 'takemenz',
      tags: [tag],
      uploadPreset: preset
    }

    openUploadWidget(uploadOptions, (error, photo) => {
      if (!error) {
        if (photo.event === 'success') {
          this.setState({
            imageUrl: photo.info.path,
            uploadedImage: true
          })
        }
      }
    })
  }

  deleteImage = () => {
    this.setState({
      imageUrl: 'v1589061239/default-profile_checno.png',
      uploadedImage: false
    })
  }

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.submitHandler()
    }
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    var spitAddie = this.props.address.split(',')
    var addie = spitAddie[spitAddie.length-2] + ',' + spitAddie[spitAddie.length-1]
    this.setState({ location: addie })
  }

  submitHandler = e => {

      register(this.state, { baseUrl: BASE_API_URL })
        .then((token) => {
          if (isAuthenticated()) {
            this.props.dispatch(getUserDetails())
          }
        })
        .catch((err) => {
          console.log(err.message)
        })
        .then(() => {
          console.log('winner', this.state)
        })
    
  }

  render () {
    return (
      <div>
        <Form>
          <Form.Input
            fluid
            required
            width={6}
            name='firstName'
            placeholder='First name'
            type='text'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <Form.Input
            fluid
            required
            width={6}
            name='lastName'
            placeholder='Last name'
            type='text'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <br/>
          <Autocomplete id='address' />
          <Form.Input
            fluid
            required
            width={6}
            name='emailAddress'
            placeholder='Email address'
            type='text'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <Form.Input
            fluid
            required
            width={6}
            name='phoneNumber'
            placeholder='Phone number'
            type='number'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <Form.Button
          onClick={e => {
            e.preventDefault()
            return this.imageUpload(undefined, 'brmcwkea')}
          }>Upload Image</Form.Button>
          {(this.state.uploadedImage) &&
            <div className='imagesPreview'>
              <div className='singleImagePreview'>
                <div style={{height: '40px', width: '40px', marginLeft: '110px'}}>
                  <button onClick={e => {
                    e.preventDefault()
                    return this.deleteImage()
                  }}>
                    <img
                      src='/trash-can.png'
                      alt='delete button'
                      className='deleteButton'
                    />
                  </button>
                </div>
                <div>
                  <img className='theImage' src={`https://res.cloudinary.com/takemenz/image/upload/${this.state.imageUrl}`}/>
                </div>
              </div>
            </div>
          }
          <Form.Group>
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
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    address: state.autocomplete
  }
}

export default connect(mapStateToProps)(EditProfile)