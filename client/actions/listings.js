import api from '../api/listings'

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
