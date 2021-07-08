import { CLEAR_USER, SET_USER, SET_USERS } from './actionTypes'

type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: Company
}

interface SetUserAction {
  type: typeof SET_USER
  payload: User
}
interface SetUsersAction {
  type: typeof SET_USERS
  payload: Array<User>
}

interface ClearUserAction {
  type: typeof CLEAR_USER
}

export type UserActionTypes = SetUserAction | SetUsersAction | ClearUserAction

export interface UserState {
  user: {
    user: User
    users: Array<User>
  }
}
