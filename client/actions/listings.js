import * as api from '../api/listings'
import { showError } from './error'

export const GET_LISTINGS_PENDING = 'GET_LISTING_PENDING'
export const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS'
export const GET_LISTING_SUCCESS = 'GET_LISTING_SUCCESS'
export const GET_USERS_LISTINGS_PENDING = 'GET_USERS_LISTINGS_PENDING'
export const GET_USERS_LISTINGS_SUCCESS = 'GET_USERS_LISTINGS_SUCCESS'

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

export function getListingSuccess () {
  return {
    type: GET_LISTING_SUCCESS
  }
}

export function getUsersListingsPending () {
  return {
    type: GET_USERS_LISTINGS_PENDING
  }
}

export function getUsersListingsSuccess (listings) {
  return {
    type: GET_USERS_LISTINGS_SUCCESS,
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

export function getUsersListings (id) {
  return dispatch => {
    dispatch(getUsersListingsPending())
    return api.getUsersListings(id)
      .then(listings => {
        dispatch(getUsersListingsSuccess(listings))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}
