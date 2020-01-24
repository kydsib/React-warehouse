import ItemActionTypes from './item.types'

const INITIAL_STATE = {
	currentUser: null,
	items: {},
	priceChanges: [],
	quantityChanges: []
}

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}
		case ItemActionTypes.ADD_NEW_ITEM:
			const id = action.payload.id
			const userId = state.currentUser.id
			return {
				...state,
				items: {
					byId: {
						...state.items.byId,
						[id]: { ...action.payload, userId }
					}
					// allIds: [...allIds, id]
				}
			}
		case ItemActionTypes.TOGGLE_ITEM_ACTIVE:
			const userToToggle = state.items.byId[action.payload]
			const idToToggle = action.payload
			const currentValue = userToToggle.active
			const nextValue = { active: !currentValue }
			const toggleActive = { ...userToToggle, ...nextValue }
			return {
				...state,
				items: {
					byId: {
						...state.items.byId,
						[idToToggle]: { ...toggleActive }
					}
				}
			}
		case ItemActionTypes.DELETE_ITEM:
			const idToDelete = action.payload
			const stateCopy = { ...state.items.byId }
			delete stateCopy[idToDelete]
			return {
				...state,
				items: {
					byId: {
						...stateCopy
					}
				}
			}
		case ItemActionTypes.UPDATE_INPUT_VALUE:
			// Should I change all the logic behind this reducer? To mutch data is being sent?
			const itemToUpdate = state.items.byId[action.payload.id]
			const itemId = itemToUpdate.id
			const mergedObject = {
				...itemToUpdate,
				...action.payload
			}
			return {
				...state,
				items: {
					byId: {
						...state.items.byId,
						[itemId]: { ...mergedObject }
					}
				}
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
					? qtyData.slice(1).concat(action.payload)
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
					? priceData.slice(1).concat(action.payload)
					: priceData.concat(action.payload)

			return {
				...state,
				priceChanges: otherItems.concat(newestValues)
			}
		default:
			return state
	}
}

export default itemReducer
