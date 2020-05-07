import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    location: '',
    password: '',
    confirmPassword: ''
  }

  updateFirstName = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  updateLastName = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  updateEmailAddress = e => {
    this.setState({
      emailAddress: e.target.value
    })
  }

  updatePhoneNumber = e => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  updateLocation = e => {
    this.setState({
      location: e.target.value
    })
  }

  updatePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  updateConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  submitHandler = e => {
    console.log(this.state)
    if (this.state.password === this.state.confirmPassword) {
      console.log('Submitted!')
    } else {
      console.log('Passwords do not match!')
    }
  }

  render () {
    return (
      <>
        <h1>Sign Up</h1>
        <p>Please fill in the following details:</p>
        <Form>
          <Form.Input
            onKeyUp={this.updateFirstName}
            fluid
            name='First name'
            placeholder='First name'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateLastName}
            fluid
            name='Last name'
            placeholder='Last name'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateEmailAddress}
            fluid
            name='Email address'
            placeholder='Email address'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updatePhoneNumber}
            fluid
            name='Phone number'
            placeholder='Phone number'
            type='number'
          />
          <Form.Input
            onKeyUp={this.updateLocation}
            fluid
            name='Location'
            placeholder='Location'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updatePassword}
            fluid
            name='Password'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            onKeyUp={this.updateConfirmPassword}
            fluid
            name='Confirm password'
            placeholder='Confirm password'
            type='password'
          />
          <Form.Button
            type='submit'
            onClick={this.submitHandler}
          >
            Submit
          </Form.Button>
          <Link to='/'>
            <Form.Button>
              Cancel
            </Form.Button>
          </Link>
        </Form>
      </>
    )
  }
}

export default SignUp
