import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Listing from './Listing'
// import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/listing/:id' component={Listing} />
      {/* <Route path='/' component={Footer} /> */}
    </Router>
  )
}

//

export default App
