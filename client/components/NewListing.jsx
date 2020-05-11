import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import SweetAlert from 'sweetalert2-react'

import { openUploadWidget } from './CloudinaryService'
import { addListing } from '../api/listings'
import Autocomplete from './Autocomplete'

import { showError, hideError } from '../actions/error'
import { userPending, userSuccess } from '../actions/users'
import { Link } from 'react-router-dom'

class NewListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: [],
      categoryId: '',
      location: '',
      imageUrl: [],
      userId: this.props.user.id, 
      show: false
    }
    this.handleChange = this.handleChange.bind(this)
  } 
// 
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleDescriptionChange = (evt) => {
    const arr = evt.target.value.split("\n")
    this.setState({description: arr})
    var spitAddie = this.props.address.split(',')
    var addie = spitAddie[spitAddie.length-2] + ',' + spitAddie[spitAddie.length-1]
    console.log(addie)
    this.setState({ location: addie })
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

  inputChecker = () => {
    const { name, description } = this.state
    if(name !== '' && description !== '') {
      return true
    } else {
      return false
    }
  }

  submitHandler = () => {
    this.props.dispatch(hideError())
    if(this.inputChecker()) {
      this.props.dispatch(userPending())
      if (!this.state.imageUrl[0]) {
        this.setState({
          imageUrl: [...this.state.imageUrl, 'v1589063179/default-listing_pgdcsc.png']
        }, () => {
          addListing(this.state)
            .then(id => {
              this.props.dispatch(userSuccess())
              this.props.history.push(`/listings/${id}`)
            })
          })
        } else {
          addListing(this.state)
            .then(id => {
              this.props.dispatch(userSuccess())
              this.props.history.push(`/listings/${id}`)
            })
      }
    } else {
      this.props.dispatch(showError('Please fill out all the fields'))
      this.setState({ show: true })
    }
  }
  render () {
    return (
      <>
      {/* this is a pretty shit solution lets make this better at some point*/}
        <div id="wrapper">

        {(isAuthenticated() && (this.props.user.username !== undefined))
        ?<>
          <h1>Create a listing</h1>
          <p>Please fill in the following</p>
          <Form>

            <label>Listing Name</label>
            <input type="text" name="name" onChange={this.handleChange} />

            {/* maybe make it a dropdown? */}
            <label>Location</label>
            <Autocomplete />

            <label>Description</label>
            <input type="text" name="description" onChange={this.handleDescriptionChange} />

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
            <Link to='/'><Form.Button
              type='button'
            >
              Cancel 
            </Form.Button></Link>
            
          </Form>
          <SweetAlert
          show={this.state.show}
          title="Oppsie, Something went wrong!"
          text={this.props.error}
          onConfirm={() => this.setState({ show: false })}
        />
        </>
        :<p>Log in to create a listing</p>}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    address: state.autocomplete,
    error: state.error
  }
}

export default connect(mapStateToProps)(NewListing)
