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

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    // password needs to be hashed before coming in here?
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
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='firstName'
            placeholder='First name'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='lastName'
            placeholder='Last name'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='emailAddress'
            placeholder='Email address'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='phoneNumber'
            placeholder='Phone number'
            type='number'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='location'
            placeholder='Location'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='password'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='confirmPassword'
            placeholder='Confirm password'
            type='password'
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

export default SignUp
