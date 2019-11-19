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
			const newItems = [...INITIAL_STATE.items]
			let addItem = newItems.push(action.payload)
			return {
				...state,
				items: newItems
			}
		default:
			return state
	}
}

export default itemReducer
