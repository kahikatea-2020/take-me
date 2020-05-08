import React from 'react'
import { connect } from 'react-redux'

import { getListings } from '../actions/listings'
// redux

// import CategoryList from 'CategoryList'
// import Search from './Search'
import ListItem from './ListItem'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getListings())
  }

  render () {
    return (
      <>
        <h1>Latest Listings</h1>
        {/* <Search /> */}
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
