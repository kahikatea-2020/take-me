import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

import WaitIndicator from './WaitIndicator'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'
import { getListings } from '../actions/listings'
import { getCategories } from '../actions/categories'
import Pagination from './Pagination'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      pageOfItems: []
    }

    this.onChangePage = this.onChangePage.bind(this)
  }

  onChangePage (pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems })
  }

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
    console.log(this.state.pageOfItems)
    return (
      <>
        <SearchBar history={this.props.history}/>
        <CategoryList history={this.props.history}/>
        <h1 id='latest-listings'>Latest Listings</h1>
        <WaitIndicator />
        <Card.Group itemsPerRow={4} className='centered'>
          {this.state.pageOfItems.map(item => <ListItem key={item.id} listing={item} />)}
        </Card.Group>

        <Pagination items={selectedListings} onChangePage={this.onChangePage} />
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
