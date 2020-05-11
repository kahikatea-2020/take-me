import {
  getUserPending,
  getUserSuccess,
  getUserDetails,
  userPending,
  userSuccess,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  LOGIN_PENDING,
  LOGIN_SUCCESS
} from './users'

jest.mock('../api/users', () => {
  return {
    getUserDetails: () => {
      return Promise.resolve(
        {
          id: 1,
          username: 'test1',
          firstName: 'best',
          lastName: 'test',
          email: 'best@test.com',
          phoneNumber: '123-4567',
          imageUrl: 'test-image.jpg',
          location: 'fairyland'
        }
      )
    }
  }
})

describe('getUserDetails functionality', () => {
  it('should have a getUserPending action that dispatched pending correctly', () => {
    const action = getUserPending()
    expect(action.type).toBe(GET_USER_PENDING)
  })
  it('should have getUserSuccess function that dispatches success correctly', () => {
    const details = {
      id: 2,
      username: 'bigdon',
      firstName: 'don',
      lastName: 'smith',
      email: 'don@bigdon.com',
      phoneNumber: '456-4567',
      imageUrl: 'don-image.jpg',
      location: 'florida'
    }
    const action = getUserSuccess(details)
    expect(action.type).toBe(GET_USER_SUCCESS)
    expect(action.details.id).toBe(2)
    expect(action.details.username).toBe('bigdon')
    expect(action.details.email).toMatch('don@bigdon')
  })

  it('should have a getUserDetails thunk function that dispatches correctly', () => {
    const dispatch = jest.fn()
    const action = getUserDetails()
    return action(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0].type).toBe(GET_USER_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(GET_USER_SUCCESS)
        expect(dispatch.mock.calls[1][0].details.location).toBe('fairyland')
        expect(Object.keys(dispatch.mock.calls[1][0].details)).toHaveLength(8)
      })
  })
})

describe('login actions', () => {
  it('should have a userPending action that dispatches pending correctly', () => {
    const action = userPending()
    expect(action.type).toBe(LOGIN_PENDING)
  })
  it('should have a userSuccess action that dispatches success correctly', () => {
    const action = userSuccess()
    expect(action.type).toBe(LOGIN_SUCCESS)
  })
})
