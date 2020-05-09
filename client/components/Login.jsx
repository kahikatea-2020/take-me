import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { isAuthenticated, signIn } from 'authenticare/client'

import { getUserDetails } from '../actions/users'
import { BASE_API_URL } from '../base-api.js'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    signIn({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(getUserDetails(this.state.username))
          this.props.history.push('/')
        }
      })
  }

  render () {
    return (
      <>
        <h1>Login</h1>
        <Form>
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='username'
            placeholder='Username'
            type='text'
          />
          <Form.Input
            onKeyUp={this.updateField}
            fluid
            width={6}
            name='password'
            placeholder='Password'
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
    state
  }
}

export default connect(mapStateToProps)(Login)
