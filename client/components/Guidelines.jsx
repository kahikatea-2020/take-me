import React from 'react'
import { Container, Header } from 'semantic-ui-react'


class Guidelines extends React.Component {
  render () {
    return (
      <Container text className='guidelines'>
        <h1>TakeMe Guidelines</h1>
        <br/>
        <p>This page is to set standards and guidelines for all users, both listers and takers.
           Please make sure you agree to all that is documented below before using our service.</p>
        <br/>
        <h2>Terms and Conditions:</h2>
        <ul>
          <li>The word lister(s) refers to anyone who uses the service and creates listings.</li>
          <li>The word taker(s) refers to anyone who uses the service who is interested in taking listings.</li>
          <li>The word listing(s) refer to anything that is created by a lister with the intention of giving it away with no monetary exchange.</li>
          <li>Hand over of listings is organised between both listers and takers.</li>
        </ul>
        <br/>
        <h2>Listers agree to:</h2>
        <ul>
          <li>Use our service with full consideration of New Zealand laws.</li>
          <li>Not post indecent photos in the listings.</li>
          <li>Not post any listings with the intention of exchanging money.</li>
          <li>Be responsible for making sure their listings are updated with only what is currently available.</li>
          <li>Be responsible in making arrangements with the taker to picking up a listing(s).</li>
          <li>Communicate in a timely and respectful manner when dealing with an interested taker.</li>
          <li>Not share any personal contact info of any other users.</li>
        </ul>
        <h2>Takers agree to:</h2>
        <ul>
          <li>Use our service with full consideration of New Zealand laws.</li>
          <li>Use our service with no intention of exchanging money.</li>
          <li>Be responsible in making arrangements with the lister to pick up a listing(s).</li>
          <li>Communicate in a timely and respectful manner when dealing with other users.</li>
          <li>Not share any personal contact info of any other users.</li>
        </ul>
      </Container>
    )
  }
}

export default Guidelines
