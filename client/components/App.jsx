import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <h1>hello app</h1>
      {/* <Route path='/' component={Navbar} /> */}
      <Route exact path='/' component={Home} />
      {/* <Route path='/' component={Footer} /> */}
    </Router>
  )
}

export default App
