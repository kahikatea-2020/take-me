import { GET_LISTINGS_SUCCESS } from '../actions/listings'
import listingsReducer from './listings'

test('a get listings success adds listing to the state', () => {
  const currentState = []
  const listings = [
    {
      id: 11,
      name: 'item1',
      description: 'super'
    },
    {
      id: 12,
      name: 'item2',
      description: 'silky'
    }
  ]
  const action = {
    type: GET_LISTINGS_SUCCESS,
    listings
  }
  const newState = listingsReducer(currentState, action)
  expect(newState.length).toBe(2)
  expect(newState[1].description).toBe('silky')
})
