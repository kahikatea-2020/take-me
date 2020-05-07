import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

class Login extends React.Component {
  state = {
    emailAddress: '',
    password: ''
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

  submitHandler = e => {
    console.log(this.state)
    console.log('Submitted!')
  }

  render () {
    return (
      <>
        <h1>Login</h1>
        <Form>
          <Form.Input
            onKeyUp={this.updateEmailAddress}
            fluid
            width={6}
            name='Email address'
            placeholder='Email address'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updatePassword}
            fluid
            width={6}
            name='Password'
            placeholder='Password'
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

export default Login
