import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { isAuthenticated, register } from 'authenticare/client'
import { connect } from 'react-redux'

import { openUploadWidget } from './CloudinaryService'
import { showError, hideError } from '../actions/error'
import { BASE_API_URL } from '../base-api.js'
import { userPending, userSuccess, getUserDetails } from '../actions/users'
import WaitIndicator from './WaitIndicator'

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    location: '',
    username: '',
    password: '',
    confirmPassword: '',
    imageUrl: ''
  }

  inputChecker = event => {
    const { firstName, lastName, emailAddress, location, username, password, phoneNumber } = this.state
    if (firstName !== '' && lastName !== '' && location !== '' && username !== '' && password !== '' && emailAddress !== '') {
      if (phoneNumber !== null || phoneNumber !== '') {
        return false
      } else {
        return false
      }
    } else {
      return true
    }
  }

  imageUpload = tag => {
    const uploadOptions = {
      cloudName: 'takemenz',
      tags: [tag],
      uploadPreset: 'nxxqgset'
    }

    openUploadWidget(uploadOptions, (error, photo) => {
      if (!error) {
        if (photo.event === 'success') {
          this.setState({
            imageUrl: photo.info.path
          })
        }
      }
    })
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    this.props.dispatch(hideError())
    if (this.state.password !== this.state.confirmPassword) {
      this.props.dispatch(showError('Password does not match'))
    } else if (this.inputChecker()) {
      this.props.dispatch(showError('Please fill out all the fields'))
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
        })
        .then(() => {
          this.props.history.push('/')
        })
    }
  }

  render () {
    return (
      <>
        <h1>Sign Up</h1>
        <p>Please fill in the following details:</p>
        {this.props.error && <div>{this.props.error}</div>}
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
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            required
            width={6}
            name='location'
            placeholder='Location'
            type='text'
          />
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
          />
          <Form.Button onClick={() => this.imageUpload()}>Upload Image</Form.Button>
          {(this.state.imageUrl !== '') &&
            <div className='imagesPreview'>
              <div><img src={`https://res.cloudinary.com/takemenz/image/upload/${this.state.imageUrl}`}/></div>
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
        <WaitIndicator />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(SignUp)
