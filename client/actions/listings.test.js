import {
  getListings,
  getListingsPending,
  getListingsSuccess,
  getListingSuccess,
  getUsersListingsPending,
  getUsersListingsSuccess,
  getUsersListings,
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS,
  GET_LISTING_SUCCESS,
  GET_USERS_LISTINGS_PENDING,
  GET_USERS_LISTINGS_SUCCESS
} from './listings'

jest.mock('../api/listings', () => {
  return {
    getListings: () => {
      return Promise.resolve([
        {
          id: 1,
          name: 'test1',
          description: 'sexy'
        },
        {
          id: 2,
          name: 'test2',
          description: 'styley'
        }
      ])
    },
    getUsersListings: () => {
      return Promise.resolve([
        {
          id: 3,
          name: 'tester',
          description: 'slick'
        },
        {
          id: 4,
          name: 'testerer',
          description: 'sound'
        }
      ])
    }
  }
})

describe('getListings functionality', () => {
  it('should have getListingsPending function that dispatches pending correctly', () => {
    const action = getListingsPending()
    expect(action.type).toBe(GET_LISTINGS_PENDING)
  })

  it('should have getListingsSuccess function that dispatches success correctly', () => {
    const listings = [
      {
        id: 111,
        name: 'testitem1',
        description: 'suave'
      },
      {
        id: 112,
        name: 'testitem2',
        description: 'snazzy'
      }
    ]
    const action = getListingsSuccess(listings)
    expect(action.type).toBe(GET_LISTINGS_SUCCESS)
    expect(action.listings).toHaveLength(2)
    expect(action.listings[0].id).toBe(111)
    expect(action.listings[0].name).toMatch('item1')
    expect(action.listings[1].description).toBe('snazzy')
  })

  it('should have a getListings thunk function that dispatches correctly', () => {
    const dispatch = jest.fn()
    const action = getListings()
    return action(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0].type).toBe(GET_LISTINGS_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(GET_LISTINGS_SUCCESS)
        expect(dispatch.mock.calls[1][0].listings[0].description).toBe('sexy')
        expect(dispatch.mock.calls[1][0].listings).toHaveLength(2)
      })
  })
})

describe('getUsersListings functionality', () => {
  it('should have getUsersListingsPending function that dispatches pending correctly', () => {
    const action = getUsersListingsPending()
    expect(action.type).toBe(GET_USERS_LISTINGS_PENDING)
  })

  it('should have getUsersListingsSuccess function that dispatches success correctly', () => {
    const listings = [
      {
        id: 1111,
        name: 'testitem1',
        description: 'sick'
      },
      {
        id: 1112,
        name: 'testitem2',
        description: 'superb'
      }
    ]
    const action = getUsersListingsSuccess(listings)
    expect(action.type).toBe(GET_USERS_LISTINGS_SUCCESS)
    expect(action.listings).toHaveLength(2)
    expect(action.listings[0].id).toBe(1111)
    expect(action.listings[0].name).toBe('testitem1')
    expect(action.listings[1].description).toBe('superb')
  })

  it('should have a getUsersListings thunk function that dispatches correctly', () => {
    const dispatch = jest.fn()
    const action = getUsersListings()
    return action(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(2)
        expect(dispatch.mock.calls[0][0].type).toBe(GET_USERS_LISTINGS_PENDING)
        expect(dispatch.mock.calls[1][0].type).toBe(GET_USERS_LISTINGS_SUCCESS)
        expect(dispatch.mock.calls[1][0].listings[0].description).toBe('slick')
        expect(dispatch.mock.calls[1][0].listings).toHaveLength(2)
      })
  })
})

test('getListingSuccess dispatches success correctly', () => {
  const action = getListingSuccess()
  expect(action.type).toBe(GET_LISTING_SUCCESS)
})
