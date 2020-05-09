export const ERROR = 'ERROR'

export function showError (message) {
  return {
    type: ERROR,
    message
  }
}
