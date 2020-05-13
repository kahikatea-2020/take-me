import {
  ADDRESS,
  CLEAR_ADDRESS,
  addAdress,
  clearAddress
} from './autocomplete'

test('add address dispatches address correctly', () => {
  const address = '123 test street, test'
  const action = addAdress(address)
  expect(action.type).toBe(GET_USER_SUCCESS)
  expect(action.details.id).toBe(2)
  expect(action.details.username).toBe('bigdon')
  expect(action.details.email).toMatch('don@bigdon')
})

test('should have getUserSuccess function that dispatches success correctly', () => {
  const details = {
    id: 2,
    username: 'bigdon',
    firstName: 'don',
    lastName: 'smith',
    email: 'don@bigdon.com',
    phoneNumber: '456-4567',
    imageUrl: 'don-image.jpg',
    location: 'florida'
  }
  const action = getUserSuccess(details)
  expect(action.type).toBe(GET_USER_SUCCESS)
  expect(action.details.id).toBe(2)
  expect(action.details.username).toBe('bigdon')
  expect(action.details.email).toMatch('don@bigdon')
  expect(action.type).toBe(GET_USER_PENDING)

})
