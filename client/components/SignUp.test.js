import React from 'react'
import { mount } from 'enzyme'
import { Form } from 'semantic-ui-react'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from '../reducers'

import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom'

import SignUp, { VanillaSignUp } from './SignUp'

test('<SignUp /> renders correctly', () => {
  const rendered = renderWithRedux(<SignUp />)
  expect(rendered).toMatchSnapshot()
})

test('<SignUp /> has the correct number of inputs', () => {
  const store = createStore(reducers, applyMiddleware(thunkMiddleware))

  const wrapper = mount(<Provider store={store}><Router><SignUp /></Router></Provider>)
  expect(wrapper.find(Form.Input).length).toBe(7)
})

// This test isn't finished and isn't passing, help
test('State gets updated when input fields are filled in', () => {
  const store = createStore(reducers, applyMiddleware(thunkMiddleware))
  const wrapper = mount(<Provider store={store}><Router><SignUp /></Router></Provider>)
  const form = wrapper.find(VanillaSignUp)
  const input = wrapper.find(Form.Input).first()
  const realInput = input.find('input')
  realInput.instance().value = 'hi'
  realInput.simulate('keyUp')
  expect(form.instance().state.firstName).toBe('hi')
})
