import * as api from '../api/categories'
import { showError } from './error'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const SELECTED_CATEGORY_CHANGE = 'SELECTED_CATEGORY_CHANGE'
export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING'

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export function getCategoriesPending () {
  return {
    type: GET_CATEGORIES_PENDING
  }
}

export function selectedCategoryChange (category) {
  return {
    type: SELECTED_CATEGORY_CHANGE,
    category
  }
}

export function getCategories () {
  return dispatch => {
    dispatch(getCategoriesPending())
    return api.getCategories()
      .then(categories => dispatch(getCategoriesSuccess(categories)))
      .catch(err => dispatch(showError(err.message)))
  }
}
