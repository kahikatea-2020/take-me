import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

class SearchBar extends Component {
  state = initialState

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

  handleEnter = e => {
    const result = this.props.listings.find(listing => listing.title === this.state.value)
    if (e.keyCode === 13) {
      this.props.history.push(`/listings/${result.id}`)
    }
  }

  render () {
    const { isLoading, value, results } = this.state
    return (
      <>
          <Search
            width={10}
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            onKeyDown={this.handleEnter}
            results={results}
            value={value}
            {...this.props}
          />
      </>
    )
  }
}

const mapStateToProps = state => {
  const listings = state.listings.map(listing => ({
      title: listing.name,
      image: `https://res.cloudinary.com/takemenz/image/upload/${listing.imageUrl[0]}`,
      id: listing.id,
      description: listing.category
    })
  )
  return {
    // selectedCategory: state.selectedCategory,
    listings: listings
  }
}

export default connect(mapStateToProps)(SearchBar)
