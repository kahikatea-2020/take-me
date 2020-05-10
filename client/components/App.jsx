import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'

import Navbar from './Navbar'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import UpdateListing from './UpdateListing'
import Listing from './Listing'
import NewListing from './NewListing'
import Profile from './Profile'
import Error404 from './Error404'
import WaitIndicator from './WaitIndicator'

// import Footer from './Footer'

import { getUserDetails } from '../actions/users'

class App extends React.Component {
  componentDidMount () {
    if (isAuthenticated()) {
      this.props.dispatch(getUserDetails())
    }
  }

  render () {
    return (
      // (this.props.pending === true)
      //   ? <WaitIndicator />
         <CloudinaryContext cloudName='takemenz'>
          <Router>
            <Route path='/' component={Navbar} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/sign-up' component={SignUp} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/new-listing' component={NewListing} />
              <Route exact path='/update-listing/:id' component={UpdateListing} />
              <Route exact path='/listings/:id' component={Listing} />
              <Route exact path='/profile/:id' component={Profile} />
              {/* <Route path='/' component={Footer} /> */}
              <Route exact path='*' component={Error404} />
            </Switch>
          </Router>
        </CloudinaryContext>
    )
  }
}

const mapStateToProps = state => {
  return {
    pending: state.pending
  }
}

export default connect(mapStateToProps)(App)
