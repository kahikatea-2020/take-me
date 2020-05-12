import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { isAuthenticated, register } from 'authenticare/client'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert2-react'

import { openUploadWidget } from './CloudinaryService'
import { showError, hideError } from '../actions/error'
import { BASE_API_URL } from '../base-api.js'
import { userPending, userSuccess, getUserDetails } from '../actions/users'
import WaitIndicator from './WaitIndicator'
import Autocomplete from './Autocomplete'

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    username: '',
    password: '',
    confirmPassword: '',
    imageUrl: 'v1589318426/hvu5hza8chku5rnjcane.png',
    uploadedImage: false,
    location: ''
  }

  inputChecker = event => {
    const { firstName, lastName, emailAddress, username, password, phoneNumber } = this.state
    if (firstName !== '' && lastName !== '' && username !== '' && password !== '' && emailAddress !== '') {
      if (phoneNumber !== null || phoneNumber !== '') {
        return false
      } else {
        return false
      }
    } else {
      return true
    }
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
      imageUrl: 'v1589318426/hvu5hza8chku5rnjcane.png',
      uploadedImage: false
    })
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    var spitAddie = this.props.address.split(',')
    var addie = spitAddie[spitAddie.length-2] + ',' + spitAddie[spitAddie.length-1]
    this.setState({ location: addie })
  }
  
  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.submitHandler()
    }
  }
  submitHandler = e => {
    this.props.dispatch(hideError())
    if (this.state.password !== this.state.confirmPassword) {
      this.props.dispatch(showError('Password does not match'))
      this.setState({ show: true })
    } else if (this.inputChecker()) {
      this.props.dispatch(showError('Please fill out all the fields'))
      this.setState({ show: true })
    } else {
      this.props.dispatch(userPending())
      register(this.state, { baseUrl: BASE_API_URL })
        .then((token) => {
          this.props.dispatch(userSuccess())
          if (isAuthenticated()) {
            this.props.dispatch(getUserDetails())
          }
        })
        .catch(() => {
          this.props.dispatch(userSuccess())
          this.props.dispatch(showError('Username already taken'))
          this.setState({ show: true })
        })
        .then(() => {
          this.props.history.push('/')
        })
    }
  }

  render () {
    return (
      <>
      <div id="wrapper">

        <h1>Sign Up</h1>
        <p>Please fill in the following details:</p>
        <Form>
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='firstName'
            placeholder='First name'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='lastName'
            placeholder='Last name'
            type='text'
          />
          <br/>
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='emailAddress'
            placeholder='Email address'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='phoneNumber'
            placeholder='Phone number'
            type='number'
          />
          <Autocomplete id='address'/>
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='username'
            placeholder='Username'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='password'
            placeholder='Password'
            type='password'
            autoComplete='off'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='confirmPassword'
            placeholder='Confirm password'
            type='password'
            autoComplete='off'
            onKeyDown={this.handleOnKeyDown}
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
          <Form.Checkbox required label={<label>I agree to the <a href='/guidelines'>TakeMe Guidelines</a></label>} error />
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
        <SweetAlert
          show={this.state.show}
          title="Oops, something went wrong!"
          text={this.props.error}
          onConfirm={() => this.setState({ show: false })}
        />
        <WaitIndicator />
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    address: state.autocomplete
  }
}

export const VanillaSignUp = SignUp

export default connect(mapStateToProps)(SignUp)
