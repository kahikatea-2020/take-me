import * as api from '../api/categories'

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export function getCategories () {
  return dispatch => {
    api.getCategories()
      .then(categories => dispatch(getCategoriesSuccess(categories)))
      .catch(err => console.log(err.message))
  }
}
