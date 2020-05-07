import React from 'react'
import Navbar from './Navbar'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'

test('Navbar displays three links if user is not logged in', () => {
  const wrapper = mount(<MemoryRouter><Navbar loggedIn={false} /></MemoryRouter>)
  expect(wrapper.find(Link)).toHaveLength(3)
})

test('Navbar displays two links if user is logged in', () => {
  const wrapper = mount(<MemoryRouter><Navbar loggedIn={true} /></MemoryRouter>)
  expect(wrapper.find(Link)).toHaveLength(2)
})
