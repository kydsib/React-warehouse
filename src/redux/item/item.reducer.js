import ItemActionTypes from './item.types'

// Pasiskaityti - https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/

const INITIAL_STATE = {
	items: [],
	priceChanges: [], // storing these as objs could make it easier to modify specific values
	quantityChanges: []
}

// TODO
// 1. Items need to have a refference to user.id from firebase.auth
// 2. ItemsList page, need to show data only of currently logged use. If no user is loged in, no data is beuing shown
// 3. Add and delete item should dispatch two actions? To set data in items also users part?

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
			// geting all the data except of a current item, that is being recieved
			const itemToUpdate = state.items.filter(
				item => item.id !== action.payload.id
			)

			const updatedState = itemToUpdate.concat(action.payload)
			return {
				...state,
				items: updatedState
			}
		case ItemActionTypes.UPDATE_QUANTITY_HISTORY:
			// get the array of items by same id
			const qtyData = state.quantityChanges.filter(
				item => item.id === action.payload.id
			)
			const restOfItems = state.quantityChanges.filter(
				item => item.id !== action.payload.id
			)
			// remove first item from arr if lenght >= 5
			const firstValueRemoved =
				qtyData.length >= 5
					? qtyData.splice(0, 1).concat(action.payload)
					: qtyData.concat(action.payload)
			return {
				...state,
				quantityChanges: restOfItems.concat(firstValueRemoved)
			}
		case ItemActionTypes.UPDATE_PRICE_HISTORY:
			const priceData = state.priceChanges.filter(
				item => item.id === action.payload.id
			)
			const otherItems = state.priceChanges.filter(
				item => item.id !== action.payload.id
			)
			const newestValues =
				priceData.length >= 5
					? priceData.splice(0, 1).concat(action.payload)
					: priceData.concat(action.payload)

			return {
				...state,
				priceChanges: otherItems.concat(newestValues)
			}
		case ItemActionTypes.UPDATE_ITEM_VALUES:
			const oldItems = state.items.filter(
				item => item.id !== action.payload.id
			)

			const newValues = oldItems.concat(action.payload)

			return {
				...state,
				items: newValues
			}
		default:
			return state
	}
}

export default itemReducer
