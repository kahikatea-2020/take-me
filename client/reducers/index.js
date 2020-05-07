import { combineReducers } from 'redux'

import pending from './pending'
import listings from './listings'

export default combineReducers({
  pending,
  listings
})
