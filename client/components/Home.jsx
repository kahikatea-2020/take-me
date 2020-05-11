import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

import WaitIndicator from './WaitIndicator'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'
import { getListings } from '../actions/listings'
import { getCategories } from '../actions/categories'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getListings())
    this.props.dispatch(getCategories())
  }

  render () {
    let selectedListings = this.props.listings.sort((a, b) => b.id - a.id)
    if (this.props.selectedCategory.id) {
      if (this.props.selectedCategory.id !== 100) {
        selectedListings = selectedListings.filter(listing => listing.categoryId === this.props.selectedCategory.id)
      }
    }

    return (
      <>
        <SearchBar history={this.props.history}/>
        <CategoryList history={this.props.history}/>
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
    selectedCategory: state.selectedCategory
  }
}

export default connect(mapStateToProps)(Home)
