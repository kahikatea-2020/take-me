import React from 'react'
import Navbar from './Navbar'
import { shallow } from 'enzyme'

test('Navbar displays two buttons (login/sign up) if user is not logged in', () => {
  const wrapper = shallow(<Navbar loggedIn={false} />)
  const button = wrapper.find('button')

  expect(button.length).toBe(2)
})

test('Navbar displays one button if user is logged in', () => {
  const wrapper = shallow(<Navbar loggedIn={true} />)
  const button = wrapper.find('button')

  expect(button.length).toBe(1)
})
