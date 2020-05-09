import {
  getCategories,
  getCategoriesSuccess,
  getCategoriesPending,
  selectedCategoryChange,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_PENDING,
  SELECTED_CATEGORY_CHANGE
} from './categories'

test('selectedCategoryChange gets category successfully', () => {
  const category = { id: 55, name: 'Bob' }
  const action = selectedCategoryChange(category)

  expect(action.category.id).toBe(55)
  expect(action.category.name).toMatch('Bob')
  expect(action.type).toBe(SELECTED_CATEGORY_CHANGE)
})
