import { GET_CATEGORIES_SUCCESS } from '../actions/categories'

export default function categoriesReducer (state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.categories
    default:
      return state
  }
}
