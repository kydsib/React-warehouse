import ItemActionTypes from './item.types'

const INITIAL_STATE = {
	items: []
}

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.TOGGLE_ITEM_ACTIVE:
			const toggle = state.items.map(item =>
				item.id === action.payload
					? { ...item, active: !item.active }
					: item
			)
			return {
				...state,
				items: toggle
			}
		case ItemActionTypes.ADD_NEW_ITEM:
			return {
				...state,
				items: state.items.concat(action.payload)
			}
		case ItemActionTypes.DELETE_ITEM:
			const itemToDelete = state.items.filter(
				item => item.id !== action.payload
			)
			return {
				...state,
				items: itemToDelete
			}
		// case ItemActionTypes.UPDATE_VALUES:
		// 	const itemToUpdate = state.items.filter(
		// 		item => item.id === action.payload.id
		// 	)
		// 	itemToUpdate.value = action.payload
		// 	return {
		// 		...state,
		// 		value:
		// 	}
		default:
			return state
	}
}

export default itemReducer
