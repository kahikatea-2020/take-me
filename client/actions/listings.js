import * as api from '../api/listings'
import { showError } from './error'

export const GET_LISTINGS_PENDING = 'GET_LISTING_PENDING'
export const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS'

export function getListingsPending () {
  return {
    type: GET_LISTINGS_PENDING
  }
}

export function getListingsSuccess (listings) {
  return {
    type: GET_LISTINGS_SUCCESS,
    listings
  }
}

export function getListings () {
  return dispatch => {
    dispatch(getListingsPending())
    return api.getListings()
      .then(listings => {
        dispatch(getListingsSuccess(listings))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}
