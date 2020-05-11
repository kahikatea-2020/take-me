import * as api from '../api/q-and-a'
import { showError } from './error'

export const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'

export function getCommentsPending () {
  return {
    type: GET_COMMENTS_PENDING
  }
}

export function getCommentsSuccess () {
  return {
    type: GET_COMMENTS_SUCCESS
  }
}