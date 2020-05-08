import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom'

import SignUp from './SignUp'

test('Sign up component renders correctly', () => {
  const rendered = renderWithRedux(<SignUp />)
  expect(rendered).toMatchSnapshot()
})
