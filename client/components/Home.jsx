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
import Pagination from './Pagination'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pageOfItems: [],
      location: ''
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

  locationFilter = e => {
    e.preventDefault()
    const location = this.props.user.location.split(', ')[1]
    this.setState({ location })
  }

  removeLocationFilter = e => {
    e.preventDefault()
    this.setState({ location: '' })
  }

  render () {
    let selectedListings = this.props.listings.sort((a, b) => b.id - a.id)
    selectedListings = selectedListings.filter(listing => listing.location.includes(this.state.location))
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
        {isAuthenticated() && <>
          {this.state.location !== ''
            ? <button onClick={this.removeLocationFilter}>Show All Listings</button>
            : <button onClick={this.locationFilter}>Listing Near Me</button> }
        </>
        }
        <h1 id='latest-listings'>Latest Listings</h1>
        <WaitIndicator />
        {selectedListings.length > 0
          ? <><Card.Group itemsPerRow={4} className='centered'>
            {this.state.pageOfItems.map(item => <ListItem key={item.id} listing={item} />)}
          </Card.Group>
          <Pagination items={selectedListings} onChangePage={this.onChangePage} />
          </>
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
