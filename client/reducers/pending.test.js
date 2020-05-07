import {
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS
} from '../actions/listings'
import pending from './pending'

describe('getListings', () => {
  it('should return true when pending action dispatched', () => {
    const action = {
      type: GET_LISTINGS_PENDING
    }
    const newState = pending(false, action)
    expect(newState).toBeTruthy()
  })
  it('should return false when success action dispatched', () => {
    const action = {
      type: GET_LISTINGS_SUCCESS
    }
    const newState = pending(true, action)
    expect(newState).toBeFalsy()
  })
})