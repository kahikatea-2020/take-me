import { ERROR } from '../actions/error'
import errorReducer from './error'

test('a get error success adds listing to the state', () => {
  const currentState = []
  const error = 'error'

  const action = {
    type: ERROR,
    message: error
  }

  const newState = errorReducer(currentState, action)
  expect(newState).toBe('error')
})
