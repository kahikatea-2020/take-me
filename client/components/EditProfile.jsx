import React from 'react'
import { Form } from 'semantic-ui-react'

import Autocomplete from './Autocomplete'

class EditProfile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null,
    imageUrl: 'v1589061239/default-profile_checno.png',
    uploadedImage: false,
    location: ''
  }

  render () {
    return (
      <div>
        <Form>
          <Form.Input
            fluid
            required
            width={6}
            name='firstName'
            placeholder='First name'
            type='text'
          />
          <Form.Input
            fluid
            required
            width={6}
            name='lastName'
            placeholder='Last name'
            type='text'
          />
          <br/>
          <Form.Input
            fluid
            required
            width={6}
            name='emailAddress'
            placeholder='Email address'
            type='text'
          />
          <Form.Input
            fluid
            required
            width={6}
            name='phoneNumber'
            placeholder='Phone number'
            type='number'
          />
          {/* <Form.Button
          onClick={e => {
            e.preventDefault()
            return this.imageUpload(undefined, 'brmcwkea')}
          }>Upload Image</Form.Button>
          {(this.state.uploadedImage) &&
            <div className='imagesPreview'>
              <div className='singleImagePreview'>
                <div style={{height: '40px', width: '40px', marginLeft: '110px'}}>
                  <button onClick={e => {
                    e.preventDefault()
                    return this.deleteImage()
                  }}>
                    <img
                      src='/trash-can.png'
                      alt='delete button'
                      className='deleteButton'
                    />
                  </button>
                </div>
                <div>
                  <img className='theImage' src={`https://res.cloudinary.com/takemenz/image/upload/${this.state.imageUrl}`}/>
                </div>
              </div>
            </div>
          }
          <Form.Checkbox required label={<label>I agree to the <a href='/guidelines'>TakeMe Guidelines</a></label>} />
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
            </Form.Button> */}
          {/* </Form.Group> */}
        </Form>
      </div>
    )
  }
}

export default EditProfile
