import { combineReducers } from 'redux'

import itemReducer from './item/item.reducer'

export default combineReducers({
	itms: itemReducer
})
