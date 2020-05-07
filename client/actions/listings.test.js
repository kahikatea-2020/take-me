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
