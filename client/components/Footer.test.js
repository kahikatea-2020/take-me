import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Footer from './Footer'

test('Test Footer renders correctly', () => {
  const rendered = renderWithRedux(<Footer />)
  expect(rendered).toMatchSnapshot()
})