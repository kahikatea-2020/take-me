import React from 'react'
import { Form } from 'semantic-ui-react'
// import UploadWidget from './uploadWidget'
import { fetchPhotos, openUploadWidget } from './CloudinaryService'

// import { getAllCategory } from '../api/category'

class NewListing extends React.Component {
  constructor () {
    super()
    this.state = {
      listingName: '',
      description: [],
      category: '',
      location: '',
      images: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value })
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
            images: [...this.state.images, photos.info.path]
          })
        }
      } else {
        console.log(error)
      }
    })
  }

  render () {
    return (
      <>
        <h1>Create a listing</h1>
        <p>Please fill in the following</p>
        <Form>

          <label>Listing Name</label>
          <input type="text" name="text" onChange={this.handleChange} />

          <label>Description</label>
          <input type="text" name="text" onChange={this.handleChange} />

          {/* maybe make it a dropdown? */}
          <label>Location (maybe make a drop down as well?) </label>
          <input type="text" name="text" onChange={this.handleChange} />
          {/* need to update category list */}
          <Form.Button onClick={() => this.imageUpload()}>Upload Image</Form.Button>
          <div className='imagesPreview'>
            {this.state.images.map(image => <div><img src={`https://res.cloudinary.com/takemenz/image/upload/${image}`}/></div>)}
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

// https://cloudinary.com/documentation/upload_widget

// https://github.com/cloudinary/cloudinary-react

// https://dev.to/emkaydauda/uploading-images-to-cloudinary-with-a-react-app-4h47
