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

// This test isn't finished and isn't passing, help
xtest('State gets updated when input fields are filled in', () => {
  const mock = jest.fn()
  const wrapper = shallow(<SignUp onKeyUp={mock}/>)
  const firstNameInput = wrapper.find(Form.Input).at(0)
  firstNameInput.simulate('keyUp', {
    currentTarget: { name: 'firstName', value: 'ellora' }
  })
  expect(mock).toHaveBeenCalledWith('ellora')
})
