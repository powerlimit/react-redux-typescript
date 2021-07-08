import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { CounterReducer } from './features/counter'
import { UserReducer } from './features/user'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  user: UserReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default store
