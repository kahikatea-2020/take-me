import React from 'react'
import { Form } from 'semantic-ui-react'
import { openUploadWidget } from './CloudinaryService'
import { isAuthenticated } from 'authenticare/client'
import { Link } from 'react-router-dom'
import { getUserDetails } from '../actions/users'
import { connect } from 'react-redux'
import { showError, hideError } from '../actions/error'
import SweetAlert from 'sweetalert2-react'


import Autocomplete from './Autocomplete'
import { editUser } from '../api/users'

class EditProfile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: null,
    imageUrl: 'v1589061239/default-profile_checno.png',
    uploadedImage: false,
    location: '',
    id: '',
    show: false
  }

  imageUpload = (tag, preset) => {
    const uploadOptions = {
      cloudName: 'takemenz',
      tags: [tag],
      uploadPreset: preset
    }

    openUploadWidget(uploadOptions, (error, photo) => {
      if (!error) {
        if (photo.event === 'success') {
          this.setState({
            imageUrl: photo.info.path,
            uploadedImage: true
          })
        }
      }
    })
  }

  deleteImage = () => {
    this.setState({
      imageUrl: 'v1589061239/default-profile_checno.png',
      uploadedImage: false
    })
  }

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.submitHandler()
    }
  }

  updateField = e => {
    this.setState({
      id: this.props.match.params.id
    })
    this.setState({
      [e.target.name]: e.target.value
    })
    var spitAddie = this.props.address.split(',')
    var addie = spitAddie[spitAddie.length-2] + ',' + spitAddie[spitAddie.length-1]
    this.setState({ location: addie })
  }

  inputChecker = event => {
    const { firstName, lastName, emailAddress, phoneNumber, location } = this.state
    if(firstName !== '' && lastName !== '' && emailAddress !== '' && location !== '') {
      if(phoneNumber !== '' || phoneNumber !== null){
        return false
      } else {
        return false
      }
    } else {
      return true
    }
  }

  submitHandler = e => {
    this.props.dispatch(hideError())
    if(this.inputChecker()){
      this.props.dispatch(showError('Please fill out all the fields'))
      this.setState({ show: true })
    } else {
      editUser(this.state)
        .then(() => {
          this.props.history.push(`/profile/${this.props.match.params.id}`)
        })
        .catch(err => {
          console.log('error is:', err.message)
        })
    }
  }

  render () {
    return (
      <div>
        {isAuthenticated() &&
        <Form>
          <Form.Input
            fluid
            width={6}
            name='firstName'
            placeholder='First name'
            type='text'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <Form.Input
            fluid
            width={6}
            name='lastName'
            placeholder='Last name'
            type='text'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <br/>
          <Autocomplete id='address' />
          <Form.Input
            fluid
            width={6}
            name='emailAddress'
            placeholder='Email address'
            type='text'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <Form.Input
            fluid
            width={6}
            name='phoneNumber'
            placeholder='Phone number'
            type='number'
            onKeyUp={this.updateField}
            autoComplete='off'
          />
          <Form.Button
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
            </Form.Button>
         </Form.Group>
        </Form>}
        <SweetAlert
          show={this.state.show}
          title="Oops, something went wrong!"
          text={this.props.error}
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    address: state.autocomplete,
    error: state.error,
    user: state.user
  }
}

export default connect(mapStateToProps)(EditProfile)