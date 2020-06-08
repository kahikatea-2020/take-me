import {
  GET_LISTINGS_SUCCESS,
  GET_LISTING_SUCCESS
} from '../actions/listings'

export default function listingsReducer (state = [], action) {
  switch (action.type) {
    case GET_LISTINGS_SUCCESS:
      return action.listings
    case GET_LISTING_SUCCESS:
      return action.listing

    default:
      return state
  }
}
