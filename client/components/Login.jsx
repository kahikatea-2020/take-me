import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

class SignUp extends React.Component {
  state = {
    emailAddress: '',
    password: '',
    confirmPassword: ''
  }

  updateEmailAddress = e => {
    this.setState({
      emailAddress: e.target.value
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
        <h1>Login</h1>
        <Form>
          <Form.Input
            onKeyUp={this.updateEmailAddress}
            fluid
            name='Email address'
            placeholder='Email address'
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
