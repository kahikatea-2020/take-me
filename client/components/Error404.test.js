import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Error404 from './Error404'

test('Test Error 404 component works', () => {
  const rendered = renderWithRedux(<Error404 />)
  expect(rendered).toMatchSnapshot()
})
