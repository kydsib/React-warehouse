import ItemActionTypes from './item.types'

export const toggleItemActive = id => ({
	type: ItemActionTypes.TOGGLE_ITEM_ACTIVE,
	payload: id
})

export const addItem = item => ({
	type: ItemActionTypes.ADD_ITEM,
	payload: item
})

export const deleteOne = id => ({
	type: ItemActionTypes.DELETE_ITEM,
	payload: id
})
