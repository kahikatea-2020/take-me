import React from 'react'
import { connect } from 'react-redux'

import WaitIndicator from './WaitIndicator'
import { getListings } from '../actions/listings'
import { Card } from 'semantic-ui-react'
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
        <WaitIndicator />
        <Card.Group>
          {this.props.listings.map(item => <ListItem key={item.id} listing={item} />)}
        </Card.Group>
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
