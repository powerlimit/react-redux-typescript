import { UserState } from './types'

export const getUser = (state: UserState) => state.user.user
export const getAllUsers = (state: UserState) => state.user.users
