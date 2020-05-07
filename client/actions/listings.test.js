import {
  getListings,
  getListingsPending,
  getListingsSuccess,
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS
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
    }
  }
})

describe('getListings functionality', () => {
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
