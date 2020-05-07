import {
  GET_LISTINGS_SUCCESS
} from '../actions/listings'

export default function listingsReducer (state = [], action) {
  switch (action.type) {
    case GET_LISTINGS_SUCCESS:
      return action.listings

    default:
      return state
  }
}
