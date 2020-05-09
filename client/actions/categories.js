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
    api.getCategories()
      .then(categories => dispatch(getCategoriesSuccess(categories)))
<<<<<<< HEAD
      .catch(err => dispatch(showError(err.message)))
||||||| 370a29e
      .catch(err => console.log(err.message))
=======
>>>>>>> be754fa76d0eba44fa35c83eb2449d0fb8d96f5f
  }
}
