import { combineReducers } from 'redux'

import pending from './pending'
import listings from './listings'
import categories from './categories'
import selectedCategory from './selectedCategory'
import user from './users'

export default combineReducers({
  pending,
  listings,
  categories,
  selectedCategory,
  user
})
