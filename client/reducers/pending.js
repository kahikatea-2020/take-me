import {
  GET_LISTINGS_PENDING,
  GET_LISTINGS_SUCCESS
} from '../actions/listings'

export default function pendingReducer (pendingState = false, action) {
  switch (action.type) {
    case GET_LISTINGS_PENDING:
      return true
    
    case GET_LISTINGS_SUCCESS:
      return false
    
    default:
      return pendingState
  }
}
