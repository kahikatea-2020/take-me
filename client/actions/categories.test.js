import {
  getCategories,
  getCategoriesSuccess,
  getCategoriesPending,
  selectedCategoryChange,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_PENDING,
  SELECTED_CATEGORY_CHANGE
} from './categories'

jest.mock('../api/categories', () => {
  return {
    getCategories: () => {
      return Promise.resolve([
        {
          id: 1,
          name: 'Fruits'
        },
        {
          id: 2,
          name: 'Ghosts'
        }
      ])
    }
  }
})

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

test('getCategories has getCategoriesPending function that dispatches pending', () => {
  const action = getCategoriesPending()
  expect(action.type).toBe(GET_CATEGORIES_PENDING)
})

test('getCategories should use redux thunk to dispatch correctly', () => {
  const dispatch = jest.fn()
  const action = getCategories()

  return action(dispatch)
    .then(() => {
      expect(dispatch.mock.calls).toHaveLength(2)
      expect(dispatch.mock.calls[0][0].type).toBe(GET_CATEGORIES_PENDING)
      expect(dispatch.mock.calls[1][0].type).toBe(GET_CATEGORIES_SUCCESS)
      expect(dispatch.mock.calls[1][0].categories[1].name).toMatch('Ghosts')
      expect(dispatch.mock.calls[1][0].categories[0].id).toBe(1)
      expect(dispatch.mock.calls[1][0].categories).toHaveLength(2)
    })
})
