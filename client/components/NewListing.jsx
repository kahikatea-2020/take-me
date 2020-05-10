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
  }

  handleDescriptionChange = (evt) => {
    const arr = evt.target.value.split("\n")
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

  deleteImage = (idx) => {
    const newImgUrl = [...this.state.imageUrl]
    newImgUrl.splice(idx, 1)
    this.setState({
      imageUrl: newImgUrl
    })
  }

  submitHandler = () => {
    if (!this.state.imageUrl[0]) {
      this.setState({
        imageUrl: [...this.state.imageUrl, 'v1589063179/default-listing_pgdcsc.png']
      }, () => {
        addListing(this.state)
          .then(id => {
            this.props.history.push(`/listings/${id}`)
          })
        })
      } else {
        addListing(this.state)
          .then(id => {
            this.props.history.push(`/listings/${id}`)
          })
    }
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
            <input type="text" name="name" required onChange={this.handleChange} />

            <label>Description</label>
            <input type="text" name="description" required onChange={this.handleDescriptionChange} />

            {/* maybe make it a dropdown? */}
            <label>Location (maybe make a drop down as well?) </label>
            <input type="text" name="location" required onChange={this.handleChange} />
            {/* need to update category list */}
            <Form.Button onClick={() => this.imageUpload()}>Upload Image</Form.Button>
            {this.state.imageUrl[0] &&
            <div className='imagesPreview'>
              {this.state.imageUrl.map((img, idx) => {
              return (
                <div key={idx} className='singleImagePreview'>
                  <div style={{height: '40px', width: '40px', marginLeft: '110px'}}>
                    <button onClick={e => {
                      e.preventDefault()
                      return this.deleteImage(idx)
                    }}>
                      <img
                        src='/trash-can.png'
                        alt='delete button'
                        className='deleteButton'
                      />
                    </button>
                  </div>
                  <div>
                    <img className='theImage' src={`https://res.cloudinary.com/takemenz/image/upload/${img}`}/>
                  </div>
                </div>
              )})}
            </div>
            }
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
