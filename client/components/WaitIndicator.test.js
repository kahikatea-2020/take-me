import React from 'react'
import { renderWithRedux } from '../test-utils'

import WaitIndicator from './WaitIndicator'

test('Test the WaitIndicator', () => {
  const { getByTestId } = renderWithRedux(<WaitIndicator />, {
    initialState: { pending: true }
  })

  expect(getByTestId('wait-indicator')).toMatchSnapshot()
})
