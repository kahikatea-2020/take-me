import * as api from '../api/categories'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const SELECTED_CATEGORY_CHANGE = 'SELECTED_CATEGORY_CHANGE'

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
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
      .catch(err => console.log(err.message))
  }
}
