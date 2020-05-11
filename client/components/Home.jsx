import React from 'react'
import { connect } from 'react-redux'

import WaitIndicator from './WaitIndicator'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'

import { getListings } from '../actions/listings'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getListings())
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
        <SearchBar history={this.props.history} />
        <h1>Latest Listings</h1>
        <CategoryList history={this.props.history} />
        <WaitIndicator />
        <div className="ListingWrapper">
          {selectedListings.map(item => <ListItem key={item.id} listing={item} />)}
        </div>
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
