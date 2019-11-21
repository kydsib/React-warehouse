import ItemActionTypes from './item.types'

const INITIAL_STATE = {
	items: []
}

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.TOGGLE_ITEM_ACTIVE:
			const updatedItem = state.items.map(item => {
				if (item.id === action.payload) {
					item.active = !item.active
					return item
				}
			})
			console.log(updatedItem)
			return {
				...state,
				items: updatedItem
			}
		case ItemActionTypes.ADD_NEW_ITEM:
			return {
				...state,
				items: state.items.concat(action.payload)
			}
		default:
			return state
	}
}

export default itemReducer
