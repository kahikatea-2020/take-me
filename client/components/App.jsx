import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'

import Navbar from './Navbar'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import Listing from './Listing'
import NewListing from './NewListing'
import Profile from './Profile'
import Error404 from './Error404'
// import Footer from './Footer'

const App = () => {
  return (
    <CloudinaryContext cloudName='takemenz'>
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/new-listing' component={NewListing} />
        <Route exact path='/listings/:id' component={Listing} />
        <Route path='/profile/:id' component={Profile} />
        <Route exact path='/error/404' component={Error404} />
        {/* <Route path='/' component={Footer} /> */}
      </Router>
    </CloudinaryContext>
  )
}

//

export default App
