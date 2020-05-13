import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { isAuthenticated } from 'authenticare/client'
import SweetAlert from 'sweetalert2-react'

import CategoryList from './CategoryList'
import { openUploadWidget } from './CloudinaryService'
import { addListing } from '../api/listings'
import { selectedCategoryChange } from '../actions/categories'
import Autocomplete from './Autocomplete'

import { showError, hideError } from '../actions/error'
import { userPending, userSuccess } from '../actions/users'
import { Link } from 'react-router-dom'

class NewListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: [],
      categoryId: '',
      location: '',
      imageUrl: [],
      userId: this.props.user.id,
      show: false,
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  // 
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleDescriptionChange = (evt) => {
    const arr = evt.target.value.split("\n")
    this.setState({ description: arr })
    var spitAddie = this.props.address.split(',')
    var addie = spitAddie[spitAddie.length - 2] + ',' + spitAddie[spitAddie.length - 1]
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
    const { name, description, checked } = this.state
    if (name !== '' && description !== '' && checked === true) {
      return true
    } else {
      return false
    }
  }

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.submitHandler()
    }
  }

  checkboxHandler = e => {
    this.setState({
      checked: !this.state.checked
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.dispatch(hideError())
    if (this.inputChecker()) {
      this.props.dispatch(userPending())
      let categoryId = undefined
      if (this.props.selectedCategory.id && this.props.selectedCategory.id !== 100) {
        categoryId = this.props.selectedCategory.id
      }
      this.setState({
        categoryId
      }, () => {
        this.props.dispatch(selectedCategoryChange({ id: undefined, name: undefined }))
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
      })
    } else {
      this.props.dispatch(showError('Please fill out all the fields'))
      this.setState({ show: true })
    }
  }

  render() {
    return (
      <>
        <div className='new-listing'>

          {(isAuthenticated() && (this.props.user.username !== undefined))
            ? <>
              <h1>Create a listing</h1>
              <p>Please fill in the following:</p>
              <Form>
                <Form.Input
                  width={6}
                  type='text'
                  name='name'
                  placeholder='Listing Title'
                  onChange={this.handleChange}
                />
                <Autocomplete />
                <Form.TextArea
                  width={6}
                  type='text'
                  name='description'
                  placeholder='Description'
                  onChange={this.handleDescriptionChange}
                  onKeyDown={this.handleOnKeyDown}
                />
                <CategoryList
                  style={{ marginBottom: '15px' }}
                  history={this.props.history}
                  onChange={() => null}
                />
                <Form.Button type='button' onClick={() => this.imageUpload()}>Upload Image</Form.Button>
                {this.state.imageUrl[0] &&
                  <div className='imagesPreview'>
                    {this.state.imageUrl.map((img, idx) => {
                      return (
                        <div key={idx} className='singleImagePreview'>
                          <div>
                            <img className='theImage' src={`https://res.cloudinary.com/takemenz/image/upload/${img}`} />
                          </div>
                          <div>
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
                        </div>
                      )
                    })}
                  </div>
                }
                <Form.Checkbox onChange={this.checkboxHandler} required label={<label>I agree to the <a href='/guidelines'>TakeMe Guidelines</a></label>} />
                <Form.Group id='new-listing-buttons'>
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
                  </Form.Button>
                </Form.Group>
              </Form>
              <SweetAlert
                show={this.state.show}
                title="Oops, something went wrong!"
                text={this.props.error}
                onConfirm={() => this.setState({ show: false })}
              />
            </>
            : <p>Log in to create a listing</p>}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    selectedCategory: state.selectedCategory,
    address: state.autocomplete,
    error: state.error
  }
}

export default connect(mapStateToProps)(NewListing)
