import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import { isAuthenticated } from 'authenticare/client'

import WaitIndicator from './WaitIndicator'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'
import { getListings } from '../actions/listings'
import { getCategories } from '../actions/categories'

class Home extends React.Component {
  state = {
    location: ''
  }

  componentDidMount () {
    this.props.dispatch(getListings())
    this.props.dispatch(getCategories())
  }

  locationFilter = e => {
    e.preventDefault()
    const location = this.props.user.location.split(', ')[1]
    this.setState({ location })
  }

  render () {
    let selectedListings = this.props.listings.sort((a, b) => b.id - a.id)
    selectedListings = selectedListings.filter(listing => listing.location.includes(this.state.location))
    if (this.props.selectedCategory.id) {
      if (this.props.selectedCategory.id !== 100) {
        selectedListings = selectedListings.filter(listing => listing.categoryId === this.props.selectedCategory.id)
      }
    }

    return (
      <>
        <SearchBar history={this.props.history}/>
        <CategoryList history={this.props.history}/>
        {isAuthenticated() &&
        <button onClick={this.locationFilter}>Listing Near Me</button>}
        <h1 id='latest-listings'>Latest Listings</h1>
        <WaitIndicator />
        <Card.Group itemsPerRow={4} className='centered'>
          {selectedListings.map(item => <ListItem key={item.id} listing={item} />)}
        </Card.Group>
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
