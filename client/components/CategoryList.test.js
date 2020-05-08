import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../test-utils'

import CategoryList from './CategoryList'

const categories = [
  { id: 1, name: 'Clothing' },
  { id: 2, name: 'Electronics' },
  { id: 3, name: 'Furniture' }
]

test('<CategoryList> renders a dropdown menu with categories from the store', () => {
  renderWithRedux(<CategoryList />, { initialState: { categories } })
  screen.findAllByRole('option').then((options) => {
    expect(options.length).toBe(categories.length)
    expect(options[2]).toHaveTextContent('Furniture')
  })
})
