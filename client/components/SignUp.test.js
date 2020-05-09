import React from 'react'
import { shallow } from 'enzyme'
import { Form } from 'semantic-ui-react'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from '../reducers'

import { renderWithRedux } from '../test-utils'
import '@testing-library/jest-dom'

import SignUp from './SignUp'

test('<SignUp /> renders correctly', () => {
  const rendered = renderWithRedux(<SignUp />)
  expect(rendered).toMatchSnapshot()
})

test('<SignUp /> has the correct number of inputs', () => {
  const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
  )
  const wrapper = shallow(<Provider store={store}><SignUp /></Provider>)
  console.log(wrapper)
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
