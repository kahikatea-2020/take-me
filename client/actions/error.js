export const ERROR = 'ERROR'
export const HIDE_ERROR = 'HIDE_ERROR'

export function showError (message) {
  return {
    type: ERROR,
    message
  }
}

export function hideError () {
  return {
    type: HIDE_ERROR
  }
}
