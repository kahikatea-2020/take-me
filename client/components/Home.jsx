import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

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
    return (
      <>
        <SearchBar history={this.props.history}/>
        <CategoryList />
        <h1>Latest Listings</h1>
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
