import React from 'react'
import '@testing-library/jest-dom'
import { renderWithRedux } from '../test-utils'

import CategoryList from './CategoryList'

jest.mock('../api/categories', () => {
  return {
    getCategories: () =>
      Promise.resolve([
        { id: 1, name: 'Clothing' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Furniture' }
      ])
  }
})

test('<CategoryList> renders a dropdown menu with categories from the store', () => {
  const { findAllByRole } = renderWithRedux(<CategoryList />)
  findAllByRole('option')
    .then(options => {
      expect(options.length).toBe(3)
      expect(options[2]).toHaveTextContent('Furniture')
    })
})
