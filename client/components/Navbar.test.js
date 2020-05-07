import React from 'react'
import Navbar from './Navbar'
import { shallow } from 'enzyme'

test('Navbar displays two buttons (login/sign up) if user is not logged in', () => {
  const wrapper = shallow(<Navbar loggedIn={false} />)
  const button = wrapper.find('button')

  expect(button.length).toBe(2)
})
