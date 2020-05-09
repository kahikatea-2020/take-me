import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { isAuthenticated, register } from 'authenticare/client'
import { connect } from 'react-redux'

import { showError } from '../actions/error'
import { BASE_API_URL } from '../base-api.js'

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    location: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    if (this.state.password !== this.state.confirmPassword) {
      this.props.dispatch(showError('Password does not match'))
    } else {
      register(this.state, { baseUrl: BASE_API_URL })
        .then((token) => {
          if (isAuthenticated()) {
            this.props.history.push('/')
          }
          console.log(token)
        })
        .catch(() => this.props.dispatch(showError('Username already taken')))
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
