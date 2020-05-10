import { combineReducers } from 'redux'

import pending from './pending'
import listings from './listings'
import categories from './categories'
import selectedCategory from './selectedCategory'
import user from './users'
import error from './error'
import userListings from './usersListings'

export default combineReducers({
  pending,
  listings,
  categories,
  selectedCategory,
  user,
  error,
  userListings
})
