import { GET_USER_SUCCESS } from '../actions/users'
import usersReducer from './users'

test('get user success adds user to the state', () => {
  const currentState = {}
  const details = {
    id: 1,
    username: 'test1',
    firstName: 'best',
    lastName: 'test',
    email: 'best@test.com',
    phoneNumber: '123-4567',
    imageUrl: 'test-image.jpg',
    location: 'fairyland'
  }

  const action = {
    type: GET_USER_SUCCESS,
    details
  }
  const newState = usersReducer(currentState, action)
  expect(newState.username).toBe('test1')
  expect(newState.email).toMatch('@test')
})
