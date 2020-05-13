export const ADDRESS = 'ADDRESS'
export const CLEAR_ADDRESS = 'CLEAR_ADDRESS'

export function addAdress (address) {
  return {
    type: ADDRESS,
    address
  }
}

export function clearAddress () {
  return {
    type: CLEAR_ADDRESS
  }
}
