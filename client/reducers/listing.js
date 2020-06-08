import {
  GET_LISTING_SUCCESS
} from '../actions/listings'

export default function listingReducer (state = [], action) {
  switch (action.type) {
    case GET_LISTING_SUCCESS:
      return action.listing

    default:
      return state
  }
}