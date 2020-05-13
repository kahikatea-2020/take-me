import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import { CloudinaryContext } from 'cloudinary-react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import { Container } from 'semantic-ui-react'

import Navbar from './Navbar'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import UpdateListing from './UpdateListing'
import Listing from './Listing'
import NewListing from './NewListing'
import Profile from './Profile'
import Error404 from './Error404'
import Footer from './Footer'
import Guidelines from './Guidelines'
import About from './About'
import EditProfile from './EditProfile'

import { getUserDetails } from '../actions/users'

class App extends React.Component {
  componentDidMount () {
    if (isAuthenticated()) {
      this.props.dispatch(getUserDetails())
    }
  }

  render () {
    const history = createBrowserHistory()
    wrapHistory(history)
    return (
      <CloudinaryContext cloudName='takemenz'>
        <Router history={history}>
          <Route path='/' component={Navbar} />
          <Container id='main-container' style={{ marginTop: '7em' }}>
            <div id='wrapper'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/new-listing' component={NewListing} />
                <Route exact path='/update-listing/:id' component={UpdateListing} />
                <Route exact path='/listings/:id' component={Listing} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path='/guidelines' component={Guidelines} />
                <Route exact path='/about' component={About} />
                <Route exact path='/edit-profile/:id' component={EditProfile} />
                <Route exact path='*' component={Error404} />
              </Switch>
            </div>
          </Container>
          <Route path='/' component={Footer} />
        </Router>
      </CloudinaryContext>
    )
  }
}

export default connect()(App)
