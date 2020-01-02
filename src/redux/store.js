import { createStore, applyMiddleware } from 'redux'
// using applyMiddleware and logger to see state changes logs
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]
// middlewares expect array of values

const store = createStore(rootReducer, applyMiddleware(...middlewares))
console.log(store.getState())

export default store
