import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

import { getListings } from '../actions/listings'

const initialState = { isLoading: false, results: [], value: '' }

class SearchBar extends Component {
  state = initialState

  componentDidMount () {
    this.props.dispatch(getListings())
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)
      // if (this.props.selectedCategory !== []) {
      //   const filteredResults = this.props.listings.filter(listing => listing.categoryId === this.props.selectedCategory.id)
      //   this.setState({
      //     isLoading: false,
      //     results: _.filter(filteredResults, isMatch)
      //   })
      // }
      this.setState({
        isLoading: false,
        results: _.filter(this.props.listings, isMatch)
      })
    }, 300)
  }

  render () {
    const { isLoading, value, results } = this.state
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.props.listings, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  const listings = state.listings.map(listing => ({
      title: listing.name,
      image: `https://res.cloudinary.com/takemenz/image/upload/${listing.imageUrl[0]}`
    })
  )
  return {
    // selectedCategory: state.selectedCategory,
    listings: listings
  }
}

export default connect(mapStateToProps)(SearchBar)
