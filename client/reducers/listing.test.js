import { GET_LISTING_SUCCESS } from '../actions/listings'
import listingReducer from './listing'

test('getListing adds the correct listing to the state', () => {
  const currentState = []
  const listing = [{
    id: 561,
    name: 'Barbie Doll',
    description: 'A barbie doll that only has one arm.'
  }]

  const action = {
    type: GET_LISTING_SUCCESS,
    listing
  }

  const newState = listingReducer(currentState, action)
  expect(newState).toHaveLength(1)
})
