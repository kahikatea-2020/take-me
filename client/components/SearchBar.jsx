import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search, Form } from 'semantic-ui-react'

import { getCategories } from '../actions/categories'

const initialState = { isLoading: false, results: [], value: '', category: {} }

class SearchBar extends Component {
  state = initialState

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  handleResultSelect = (e, { result }) => this.props.history.push(`/listings/${result.id}`)

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)
      let filteredResults = this.props.listings
      if (this.state.category.id) {
        if (this.state.category.id !== 100) {
          filteredResults = this.props.listings.filter(listing => listing.categoryId === this.state.category.id)
        }
      }
      this.setState({
        isLoading: false,
        results: _.filter(filteredResults, isMatch)
      }) 
    }, 300)
  }

  handleCategoryChange = (e, data) => {
    const id = data.options.find(category => data.value === category.value).key
    const text = data.options.find(category => data.value === category.value).text
    this.setState({
      category: {
        text: text,
        id: id,
        name: data.value
      }
    })
  }

  handleEnter = e => {
    const result = this.props.listings.find(listing => listing.title === this.state.value)
    if (e.keyCode === 13) {
      this.props.history.push(`/listings/${result.id}`)
    }
  }

  render () {
    const { isLoading, value, results } = this.state
    const storeCategories = this.props.categories.map(category => ({
      key: category.id,
      text: category.name,
      value: category.name
    }))
    const categories = [{ key: 100, text: 'All Categories', value: 'All Categories' }, ...storeCategories]
    return (
      <>
        <Form.Select
          width={6}
          onChange={this.handleCategoryChange}
          fluid
          options={categories}
          placeholder='Category'
          name='category'
          value={this.state.category.name}
        />
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
      categoryId: listing.categoryId
    })
  )
  return {
    listings: listings,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(SearchBar)
