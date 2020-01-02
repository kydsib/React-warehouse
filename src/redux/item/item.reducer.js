import ItemActionTypes from './item.types'

// Pasiskaityti - https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/

const INITIAL_STATE = {
	items: [],
	quantityChanges: {
		value: [],
		time: []
	},
	priceChanges: {
		value: [],
		time: []
	}
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

		case ItemActionTypes.UPDATE_INPUT_VALUE:
			const itemToUpdate = state.items.filter(
				item => item.id !== action.payload.id
			)

			const updatedState = itemToUpdate.concat(action.payload)
			return {
				...state,
				items: updatedState
			}
		case ItemActionTypes.UPDATE_QUANTITY_HISTORY:
			return {
				...state,
				quantityChanges: {
					...state.quantityChanges,
					value: state.quantityChanges.value.concat(
						Number(action.payload.value)
					),
					time: state.quantityChanges.time.concat(action.payload.time)
				}
			}
		case ItemActionTypes.UPDATE_PRICE_HISTORY:
			return {
				...state,
				priceChanges: {
					...state.priceChanges,
					value: state.priceChanges.value.concat(
						Number(action.payload.value)
					),
					time: state.priceChanges.time.concat(action.payload.time)
				}
			}
		default:
			return state
	}
}

export default itemReducer
