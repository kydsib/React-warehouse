import ItemActionTypes from './item.types'

// Pasiskaityti - https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/

const INITIAL_STATE = {
	items: [],
	priceChanges: [],
	quantityChanges: []
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
			const firstValueRemoved =
				state.quantityChanges.length >= 5
					? state.quantityChanges.shift()
					: state.quantityChanges

			return {
				...state,
				quantityChanges:
					state.quantityChanges.length >= 5
						? firstValueRemoved.concat(action.payload)
						: state.quantityChanges.concat(action.payload)
			}
		case ItemActionTypes.UPDATE_PRICE_HISTORY:
			const firstPriceRemoved =
				state.priceChanges.length >= 5
					? state.priceChanges.shift()
					: state.priceChanges
			return {
				...state,
				priceChanges:
					state.priceChanges.length >= 5
						? firstPriceRemoved.concat(action.payload)
						: state.priceChanges.concat(action.payload)
			}
		default:
			return state
	}
}

export default itemReducer
