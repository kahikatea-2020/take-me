import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route path='/' component={Footer} />
    </>
  )
}

export default App
