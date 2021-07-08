import { UserActionTypes } from './types'
import { CLEAR_USER, SET_USER, SET_USERS } from './actionTypes'

const initState = {
  user: null,
  users: [],
}

// @ts-ignore
export default (state = initState, { type, payload }: UserActionTypes) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload }
    case SET_USERS:
      return { ...state, users: payload }
    case CLEAR_USER:
      return { ...state, user: null }
    default:
      return state
  }
}
