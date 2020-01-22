// import { UserActionTypes } from './user.types'

// const INITAIAL_STATE = {
// 	currentUser: null
// }

// const userReducer = (state = INITAIAL_STATE, action) => {
// 	switch (action.type) {
// 		case UserActionTypes.SET_CURRENT_USER:
// 			return {
// 				...state,
// 				currentUser: action.payload
// 			}

// 		default:
// 			return state
// 	}
// }

// export default userReducer

// What I don't understand?
// 1. How different reducers can comunicate with one another or
// how state modification works if it's managed by two separate reducers

// Items reducers works with items data, users w/ users.
// How to connect items to user by user id?
