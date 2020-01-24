import { combineReducers } from 'redux'

import itemReducer from './item/item.reducer'
// import userReducer from './user/user.reducer'

export default combineReducers({
	itms: itemReducer
	// user: userReducer
})
