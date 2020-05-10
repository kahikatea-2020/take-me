import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'

import { openUploadWidget } from './CloudinaryService'
import { addListing } from '../api/listings'

class NewListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: [],
      categoryId: '',
      location: '',
      imageUrl: [],
      userId: this.props.user.id
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value })
    console.log()
  }

  handleDescriptionChange = (evt) => {
    const arr = new Array(1).fill(evt.target.value)
    this.setState({description: arr})
  }

  imageUpload = tag => {
    const uploadOptions = {
      cloudName: 'takemenz',
      tags: [tag],
      uploadPreset: 'nxxqgset'
    }

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          this.setState({
            imageUrl: [...this.state.imageUrl, photos.info.path]
          })
        }
      }
    })
  }

  submitHandler = () => {
    console.log(this.state)
    addListing(this.state)
      .then(id => {
        this.props.history.push(`/listings/${id}`)
      })
  }
  render () {
    return (
      <>
      {/* this is a pretty shit solution lets make this better at some point*/}
        {(isAuthenticated() && (this.props.user.username !== undefined))
        ?<>
          <h1>Create a listing</h1>
          <p>Please fill in the following</p>
          <Form>

            <label>Listing Name</label>
            <input type="text" name="name" onChange={this.handleChange} />

            <label>Description</label>
            <input type="text" name="description" onChange={this.handleDescriptionChange} />

            {/* maybe make it a dropdown? */}
            <label>Location (maybe make a drop down as well?) </label>
            <input type="text" name="location" onChange={this.handleChange} />
            {/* need to update category list */}
            <Form.Button onClick={() => this.imageUpload()}>Upload Image</Form.Button>
            <div className='imagesPreview'>
              {this.state.imageUrl.map(image => <div><img src={`https://res.cloudinary.com/takemenz/image/upload/${image}`}/></div>)}
            </div>
            <Form.Button
              type='submit'
              onClick={this.submitHandler}
            >
              Submit
            </Form.Button>
            
          </Form>
        </>
        :<p>Log in to create a listing</p>}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NewListing)
