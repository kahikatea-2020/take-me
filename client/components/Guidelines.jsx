import React from 'react'

class Guidelines extends React.Component {
  render () {
    return (
      <div className='guidelines'>
        <h1>Take Me Guideles</h1>
        <br/>
        <p>This page is to set standards and guidelines for all users, both listers and Takers.
           Please make sure you agree to all that is documented below before using our service.</p>
        <br/>
        <h2>Terms and Conditions</h2>
        <ul>
          <li>The word users refers to anyone who uses the service and create listings.</li>
          <li>The word takers refers to anyone who uses the service who is interested in taking listings.</li>
          <li>The word listing/listings refers to anything that is created by the user with the intention of giving it away.</li>
          <li>Hand over of listings is organised between both users and takers.</li>
        </ul>
        <br/>
        <h2>Users agree to:</h2>
        <ul>
          <li>Use our service with full consideration of NZ laws.</li>
          <li>Not post indecent photos in the listings</li>
          <li>Not post anything with the intention to sell any listing created.</li>
          <li>Be responsible for making sure the user list is updated with only what is available.</li>
          <li>Be responsible in making arrangement with the lister in picking up listings</li>
          <li>Communicate in a timely and respectful manner when dealing with an interested taker.</li>
          <li>Not to share any personal contact info of any other users/takers</li>
        </ul>
        <h2>Takers agree to:</h2>
        <ul>
          <li>Use our service with full consideration of NZ laws.</li>
          <li>Use our service with no intention of selling listings taken</li>
          <li>Be responsible in making arrangement with the user in picking up listings</li>
          <li>Communicate in a timely and respectful manner when dealing with an user.</li>
          <li>Not to share any personal contact info of any other users/takers</li>
        </ul>
      </div>
    )
  }
}

export default Guidelines
