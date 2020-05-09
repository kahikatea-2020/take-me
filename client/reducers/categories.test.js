import { GET_CATEGORIES_SUCCESS } from '../actions/categories'
import categoriesReducer from './categories'

test('categoriesReducer successfully adds category to the state', ()  => {
  const state = []
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

  const action = {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }

  const newState = categoriesReducer(state, action)

  expect(newState).toHaveLength(3)
})
