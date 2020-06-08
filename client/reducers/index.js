import { combineReducers } from 'redux'

import pending from './pending'
import listing from './listing'
import listings from './listings'
import categories from './categories'
import selectedCategory from './selectedCategory'
import user from './users'
import error from './error'
import userListings from './usersListings'
import autocomplete from './autocomplete'

export default combineReducers({
  pending,
  listing,
  listings,
  categories,
  selectedCategory,
  user,
  error,
  userListings,
  autocomplete
})
