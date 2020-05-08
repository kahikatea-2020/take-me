import React from 'react'
import { Form } from 'semantic-ui-react'

const categoryList = [
  { id: 1, name: 'Clothing' },
  { id: 2, name: 'Electronics' },
  { id: 3, name: 'Furniture' },
  { id: 4, name: 'Homeware & Applicances' },
  { id: 5, name: 'Automotive' },
  { id: 6, name: 'Garden' },
  { id: 7, name: 'Sports' },
  { id: 8, name: 'Health & Beauty' },
  { id: 9, name: 'Music & Instruments' }
]

class CategoryList extends React.Component {
  state = {
    selectedCategory: {}
  }

  handleChange = (e, data) => {
    const text = data.options.find(category => data.value === category.value).text
    this.setState({
      selectedCategory: {
        text: text,
        name: data.value
      }
    })
  }

  // submitHandler = () => {
  //   console.log(this.state)
  // }

  render () {
    const categories = categoryList.map(category => ({
      text: category.name,
      value: category.name
    }))

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

export default CategoryList
