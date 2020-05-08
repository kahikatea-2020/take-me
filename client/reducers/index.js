import { combineReducers } from 'redux'

import pending from './pending'
import listings from './listings'
import categories from './categories'
import selectedCategory from './selectedCategory'

export default combineReducers({
  pending,
  listings,
  categories,
  selectedCategory
})
