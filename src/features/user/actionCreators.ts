import { Dispatch } from 'redux'
import { SET_USER, SET_USERS } from './actionTypes'

export const fetchUser = (id: string | null) => {
  return (dispatch: Dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: SET_USER, payload: json }))
  }
}

export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: SET_USERS, payload: json }))
  }
}
