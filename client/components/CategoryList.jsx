import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { getCategories, selectedCategoryChange } from '../actions/categories'

class CategoryList extends React.Component {
  state = {
    selectedCategory: {}
  }

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  handleChange = (e, data) => {
    const id = data.options.find(category => data.value === category.value).key
    const text = data.options.find(category => data.value === category.value).text
    this.props.dispatch(selectedCategoryChange({
      id: id,
      name: data.value
    }))
    this.setState({
      selectedCategory: {
        text: text,
        name: data.value
      }
    })
    this.props.onChange()
  }

  render () {
    let categories = this.props.categories.map(category => ({
      key: category.id,
      text: category.name,
      value: category.name
    }))
    if (this.props.history.location.pathname === '/') {
      categories = [{ key: 100, text: 'All Categories', value: 'All Categories' }, ...categories]
    } else if (this.props.history.location.pathname === '/new-listing') {
      categories = [{ key: 100, text: 'No Category (not recommended)', value: 'No Category (not recommended)' }, ...categories]
    }

    return (
      <>
        <Form.Select
          width={6}
          onChange={this.handleChange}
          fluid
          options={categories}
          placeholder='Category'
          name='category'
          value={this.state.selectedCategory.name}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryList)
