import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SweetAlert from 'sweetalert2-react'

import { isAuthenticated, signIn } from 'authenticare/client'

import { getUserDetails, userPending, userSuccess } from '../actions/users'
import { BASE_API_URL } from '../base-api.js'
import { showError, hideError } from '../actions/error'
import WaitIndicator from './WaitIndicator'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    show: false
  }

  updateField = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    this.props.dispatch(hideError())
    this.props.dispatch(userPending())
    signIn({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: BASE_API_URL
    })
      .then((token) => {
        this.props.dispatch(userSuccess())
        if (isAuthenticated()) {
          this.props.dispatch(getUserDetails())
          this.props.history.goBack()
        } else {
          this.setState({ show: true })
          this.props.dispatch(showError('Username or Password Incorrect'))
        }
      })
      .catch(() => {
        this.setState({ show: true })
        this.props.dispatch(userSuccess())
        this.props.dispatch(showError('Username or Password Incorrect'))
      })
  }

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.submitHandler()
    }
  }

  render () {
    return (
      <>
        <div id='wrapper'>
          <h1>Login</h1>
          <Form>
            <Form.Group>
              <Form.Input
                onKeyUp={this.updateField}
                fluid
                width={6}
                name='username'
                placeholder='Username'
                type='text'
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                onKeyUp={this.updateField}
                fluid
                width={6}
                name='password'
                placeholder='Password'
                type='password'
                autoComplete='off'
                onKeyDown={this.handleOnKeyDown}
              />
            </Form.Group>
            <Form.Group id='login-buttons'>
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
          <SweetAlert
            show={this.state.show}
            title="Oppsie, Something went wrong!"
            text={this.props.error}
            onConfirm={() => this.setState({ show: false })}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  }
}

export default connect(mapStateToProps)(Login)
