import ItemActionTypes from './item.types'

export const toggleItemActive = () => ({
	type: ItemActionTypes.TOGGLE_ITEM_ACTIVE
})

export const addItem = item => ({
	type: ItemActionTypes.ADD_ITEM,
	payload: item
})
