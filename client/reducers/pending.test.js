import {
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS,
  GET_LISTING_SUCCESS,
  GET_USERS_LISTINGS_SUCCESS,
  GET_USERS_LISTINGS_PENDING
} from '../actions/listings'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  GET_USER_PENDING,
  GET_USER_SUCCESS
} from '../actions/users'
import pending from './pending'

import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS
} from '../actions/categories'

import { ERROR } from '../actions/error'

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

describe('Login', () => {
  it('should return true when pending action dispatched', () => {
    const action = {
      type: LOGIN_PENDING
    }
    const newState = pending(false, action)
    expect(newState).toBeTruthy()
  })
  it('should return false when success action dispatched', () => {
    const action = {
      type: LOGIN_SUCCESS
    }
    const newState = pending(true, action)
    expect(newState).toBeFalsy()
  })
})

describe('Get User', () => {
  it('should return true when pending action dispatched', () => {
    const action = {
      type: GET_USER_PENDING
    }
    const newState = pending(false, action)
    expect(newState).toBeTruthy()
  })
  it('should return false when success action dispatched', () => {
    const action = {
      type: GET_USER_SUCCESS
    }
    const newState = pending(true, action)
    expect(newState).toBeFalsy()
  })
})

describe('Ger User Listings', () => {
  it('should return true when pending action dispatched', () => {
    const action = {
      type: GET_USERS_LISTINGS_PENDING
    }
    const newState = pending(false, action)
    expect(newState).toBeTruthy()
  })
  it('should return false when success action dispatched', () => {
    const action = {
      type: GET_USERS_LISTINGS_SUCCESS
    }
    const newState = pending(true, action)
    expect(newState).toBeFalsy()
  })
})

describe('get categories', () => {
  it('should return true when pending action dispatched', () => {
    const action = {
      type: GET_CATEGORIES_PENDING
    }
    const newState = pending(false, action)
    expect(newState).toBeTruthy()
  })
  it('should return false when success action dispatched', () => {
    const action = {
      type: GET_CATEGORIES_SUCCESS
    }
    const newState = pending(true, action)
    expect(newState).toBeFalsy()
  })
})

test('error action sets pending to false', () => {
  const action = {
    type: ERROR
  }
  const newState = pending(true, action)
  expect(newState).toBeFalsy()
})

test('get listing success action sets pending to false', () => {
  const action = {
    type: GET_LISTING_SUCCESS
  }
  const newState = pending(true, action)
  expect(newState).toBeFalsy()
})
