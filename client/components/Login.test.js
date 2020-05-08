import React from 'react'
import renderer from 'react-test-renderer'

import Login from './Login'

test('Test Login component so it renders right', () => {
  const rendered = renderer
    .create(<Login />)
    .toJSON()
  expect(rendered).toMatchSnapshot()
})
