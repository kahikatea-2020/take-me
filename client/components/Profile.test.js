import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Profile from './Profile'

test('Test profile component renders correctly', () => {
  const rendered = renderWithRedux(<Profile />)
  expect(rendered).toMatchSnapshot()
})
