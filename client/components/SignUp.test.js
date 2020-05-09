import React from 'react'
import { shallow } from 'enzyme'
import { Form } from 'semantic-ui-react'

import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom'

import SignUp from './SignUp'

test('<SignUp /> renders correctly', () => {
  const rendered = renderWithRedux(<SignUp />)
  expect(rendered).toMatchSnapshot()
})

test('<SignUp /> has the correct number of inputs', () => {
  const wrapper = shallow(<SignUp />)
  expect(wrapper.find(Form.Input).length).toBe(8)
})
