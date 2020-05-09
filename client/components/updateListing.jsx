import React from 'react'
import axios from 'axios';
import { Form, List } from 'semantic-ui-react'
import { getListingById } from '../api/listings'
import Listing from './Listing';


class updateListing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: [],
      location: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount () {
    this.getListingDetails()
  }
  getListingDetails(){
    let listingId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/v1/listings/${listingId}`)
    .then(response => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        location: response.data.location
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

    editMeetup(newListing){
      axios.request({
        method:'put',
        url:`http://localhost:3000/api/v1/listings/${id}`,
        data: newListing
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    }

    onSubmit(e){
      const newMeetup = {
        name: this.refs.name.value,
        description: this.refs.description.value,
        location: this.refs.location.value
      }
      this.editMeetup(newMeetup);
      e.preventDefault();
    }
  
    handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

  render () {
    return (
      <>
        <h1>Update Listing</h1>
        <Form onSubmit={this.onSubmit.bind(this)}>>
          <div className="ui form">
            <div className="field">
              <label>Listing Name</label>
              <input type="text" 
              name="name" 
              ref="name" 
              value={this.state.name} 
              onChange={this.handleInputChange} 
              />
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>Description</label>
              <input type="text" 
              name="description" 
              ref="description" 
              value={this.state.description} 
              onChange={this.handleInputChange} 
              />
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>Location</label>
              <input type="text" 
              name="location" 
              ref="location" 
              value={this.state.location} 
              onChange={this.handleInputChange} 
              />
            </div>
          </div>
          <input type="submit" value="Save" className="btn" />
        </Form>
      </>
    )
  }
}

export default updateListing
