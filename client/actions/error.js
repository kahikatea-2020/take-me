export const ERROR = 'ERROR'

export function showError (message) {
  reutrn {
    type: ERROR,
    message
  }
}
