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

test('getCategories has getCategoriesSuccess function that dispatches success', () => {
  const categories = [
    {
      id: 1,
      name: 'Trucks'
    },
    {
      id: 300,
      name: 'Dolls'
    },
    {
      id: 96,
      name: 'Popsicles'
    }
  ]
  const action = getCategoriesSuccess(categories)

  expect(action.type).toBe(GET_CATEGORIES_SUCCESS)
  expect(action.categories[1].id).toBe(300)
  expect(action.categories[2].name).toMatch('Popsicles')
  expect(action.categories).toHaveLength(3)
})
