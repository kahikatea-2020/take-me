import { GET_USERS_LISTINGS_SUCCESS } from '../actions/listings'
import UserListingsReducer from './usersListings'

test('Test the user listing reducer', () => {
  const currentState = []
  const UsersListings = [
    {
      id: 1,
      name: 'A single Banana',
      description: 'Yellow and funny looking, slightly black',
      userId: 2
    },
    {
      id: 2,
      name: 'A empty water bottle',
      description: 'I didnt want to throw it you',
      userId: 2
    },
    {
      id: 3,
      name: 'Rubish',
      description: 'Rubish, just like your mum',
      userId: 2
    },
    {
      id: 4,
      name: '$4000 gift card',
      description: 'Moving house so I dont need it anymore',
      userId: 2
    }
  ]
  const action = {
    type: GET_USERS_LISTINGS_SUCCESS,
    listings: UsersListings
  }
  const newState = UserListingsReducer(currentState, action)
  expect(newState.length).toBe(4)
  expect(newState[1].name).toBe('A empty water bottle')
  expect(newState[0].userId).toBe(2)
})
