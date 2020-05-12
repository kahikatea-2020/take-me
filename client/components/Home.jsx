import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Container, Checkbox } from 'semantic-ui-react'
import { isAuthenticated } from 'authenticare/client'

import WaitIndicator from './WaitIndicator'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'
import { getListings } from '../actions/listings'
import { getCategories } from '../actions/categories'

class Home extends React.Component {
  state = {
    location: '',
    checked: false,
    locationAdded: false
  }

  componentDidMount () {
    this.props.dispatch(getListings())
    this.props.dispatch(getCategories())
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ checked: !this.state.checked })
  }

  addLocation = () => {
    const location = this.props.user.location.split(', ')[1]
    this.setState({ location, locationAdded: true })
  }

  render () {
    if (!this.state.locationAdded && this.props.user.location) {
      this.addLocation()
    }
    let selectedListings = this.props.listings.sort((a, b) => b.id - a.id)
    if (this.state.checked) {
      selectedListings = selectedListings.filter(listing => listing.location.includes(this.state.location))
    }
    if (this.props.selectedCategory.id && (this.props.selectedCategory.id !== 100)) {
      selectedListings = selectedListings.filter(listing => listing.categoryId === this.props.selectedCategory.id)
    }

    return (
      <>
        <SearchBar history={this.props.history}/>
        <div id='toggle' className='ui three column grid' style={{ height: '10vh' }}>
          <div className='row'>
            <h1 className='four wide column' id='latest-listings'>Latest Listings</h1>
            {isAuthenticated() &&
            <div className="eight wide column">
              <Checkbox
                label='Near Me'
                onClick={this.handleChange}
                style={{ marginTop: '10px' }}
                toggle
              />
              {/* <label>Near Me</label>
              <input type="checkbox" value={this.state.checked} onClick={this.handleChange}/> */}
            </div>
            // <Button.Group className='eight wide column'>
            //   {/* {this.state.location !== '' */}
            //   <Button onClick={this.removeLocationFilter} positive>Show All Listings</Button>
            //   <Button.Or />
            //   <Button onClick={this.locationFilter}>Listings Near Me</Button>
            // </Button.Group>
            }
            <div className='four wide right aligned column'>
              <CategoryList history={this.props.history}/>
            </div>
          </div>
        </div>
        <WaitIndicator />
        {selectedListings.length > 0
          ? <Card.Group itemsPerRow={4} className='centered'>
            {selectedListings.map(item => <ListItem key={item.id} listing={item} />)}
          </Card.Group>
          : <p>Sorry, there are no current listings in your location</p>}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    selectedCategory: state.selectedCategory,
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
