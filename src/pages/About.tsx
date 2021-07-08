import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectors, actionCreators } from '../features/user'
import { CLEAR_USER } from '../features/user/actionTypes'

export const About: React.FC = () => {
  const history = useHistory()
  const user = useSelector(selectors.getUser)
  const users = useSelector(selectors.getAllUsers)
  const dispatch = useDispatch()

  const handleFetchUser = () => {
    // eslint-disable-next-line no-alert
    dispatch(actionCreators.fetchUser(prompt()))
  }

  const handleFetchAllUsers = () => {
    dispatch(actionCreators.fetchUsers())
  }

  const handleRemoveUser = () => {
    dispatch({ type: CLEAR_USER })
  }
  return (
    <Fragment>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        possimus doloribus error cumque autem asperiores, ullam deserunt quidem
        omnis doloremque itaque eius eaque sint facilis unde tenetur reiciendis
        aliquam soluta?
      </p>
      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>
      {user ? (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{user.name}</span>
                <p>
                  {user.address.city} {user.address.street}
                </p>
              </div>
              <div className="card-action">
                <button
                  onClick={handleRemoveUser}
                  className="btn"
                  type="button"
                >
                  remove user
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <p>No User Found</p>
          <button
            onClick={handleFetchUser}
            type="button"
            className="waves-effect waves-light btn"
          >
            GET USER
          </button>
          <button
            onClick={handleFetchAllUsers}
            type="button"
            className="waves-effect waves-light btn"
          >
            GET All Users
          </button>
          {users.length > 0 && (
            <ul>
              {users.map((usr) => {
                return <li key={usr.id}>{usr.name}</li>
              })}
            </ul>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}
