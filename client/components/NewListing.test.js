import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'

import NewListing from './NewListing'

test('Test New Listing component renders correctly', () => {
  const rendered = renderWithRedux(<NewListing />)
  expect(rendered).toMatchSnapshot()
})

