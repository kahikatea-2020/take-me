import React from 'react'
import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'

import { ListItem } from 'semantic-ui-react'

test('Test that ListItem renders correctly', () => {
  const rendered = renderWithRedux(<ListItem />)
  expect(rendered).toMatchSnapshot()
})
