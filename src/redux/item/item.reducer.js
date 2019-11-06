import ItemActionTypes from './item.types'

const INITIAL_STATE = {
	active: true,
	items: []
}

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.TOGGLE_ITEM_ACTIVE:
			return {
				...state,
				active: !state.active
			}
		case ItemActionTypes.ADD_NEW_ITEM:
			return {
				...state,
				items: [...state.items, action.payload]
			}
		default:
			return state
	}
}
console.log(INITIAL_STATE)

export default itemReducer
