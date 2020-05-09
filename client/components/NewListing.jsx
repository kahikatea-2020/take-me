import React from 'react'
import { Form } from 'semantic-ui-react'
// import UploadWidget from './uploadWidget'
import { openUploadWidget } from './CloudinaryService'
import { addListing } from '../api/listings'

// import { getAllCategory } from '../api/category'

class NewListing extends React.Component {
  constructor () {
    super()
    this.state = {
      listingName: '',
      description: [],
      category: '',
      location: '',
      imageUrls: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value })
    console.log()
  }

  imageUpload = tag => {
    const uploadOptions = {
      cloudName: 'takemenz',
      tags: [tag],
      uploadPreset: 'nxxqgset'
    }

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos)
        if (photos.event === 'success') {
          this.setState({
            imageUrls: [...this.state.imageUrls, photos.info.path]
          })
        }
      } else {
        console.log(error)
      }
    })
  }

  submitHandler = () => {
    console.log(this.state)
    addListing(this.state)
      .then(id => {
        this.props.history.push(`/`)
        // this.props.history.push(`/listings/${id}`)
      })
  }
  render () {
    return (
      <>
        <h1>Create a listing</h1>
        <p>Please fill in the following</p>
        <Form>

          <label>Listing Name</label>
          <input type="text" name="listingName" onChange={this.handleChange} />

          <label>Description</label>
          <input type="text" name="description" onChange={this.handleChange} />

          {/* maybe make it a dropdown? */}
          <label>Location (maybe make a drop down as well?) </label>
          <input type="text" name="location" onChange={this.handleChange} />
          {/* need to update category list */}
          <Form.Button onClick={() => this.imageUpload()}>Upload Image</Form.Button>
          <div className='imagesPreview'>
            {this.state.imageUrls.map(image => <div><img src={`https://res.cloudinary.com/takemenz/image/upload/${image}`}/></div>)}
          </div>
          <Form.Button
            type='submit'
            onClick={this.submitHandler}
          >
            Submit
          </Form.Button>
          
        </Form>
      </>
    )
  }
}

export default NewListing
