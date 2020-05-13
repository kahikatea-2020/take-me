import {
  ADDRESS,
  CLEAR_ADDRESS,
  addAdress,
  clearAddress
} from './autocomplete'

test('add address dispatches address correctly', () => {
  const address = '123 test street, test'
  const action = addAdress(address)
  expect(action.type).toBe(ADDRESS)
  expect(action.address).toMatch('test street')
})

test('should have getUserSuccess function that dispatches success correctly', () => {
  const action = clearAddress()
  expect(action.type).toBe(CLEAR_ADDRESS)
})
