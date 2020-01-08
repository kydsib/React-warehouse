import { createStore, applyMiddleware } from 'redux'
// using applyMiddleware and logger to see state changes logs
import logger from 'redux-logger'

import { loadState, saveState } from '../data_storage/localStorage'
import rootReducer from './root-reducer'

const middlewares = [logger]
// middlewares expect array of values

const persistedState = loadState()

const store = createStore(
	rootReducer,
	persistedState,
	applyMiddleware(...middlewares)
)

// saving state any time store state changes
store.subscribe(() => {
	saveState(store.getState())
})

export default store
