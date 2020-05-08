import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Login from './Login'

test('Test Login component so it renders right', () => {
  const rendered = renderWithRedux(<Login />)
  expect(rendered).toMatchSnapshot()
})
