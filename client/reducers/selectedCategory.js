import { SELECTED_CATEGORY_CHANGE } from '../actions/categories'

export default function selectedCategoryReducer (state = [], action) {
  switch (action.type) {
    case SELECTED_CATEGORY_CHANGE:
      return action.category
    default:
      return state
  }
}
