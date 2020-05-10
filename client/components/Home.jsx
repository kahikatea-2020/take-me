import React from 'react'
import { connect } from 'react-redux'

import WaitIndicator from './WaitIndicator'
import { getListings } from '../actions/listings'
// redux

// import CategoryList from 'CategoryList'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getListings())
  }

  render () {
    return (
      <>
        <SearchBar history={this.props.history}/>
        <CategoryList />
        <h1>Latest Listings</h1>
        <WaitIndicator />
        <div className="ListingWrapper">
          {this.props.listings.map(item => <ListItem key={item.id} listing={item} />)}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(Home)
