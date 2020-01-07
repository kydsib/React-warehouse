import ItemActionTypes from './item.types'

export const toggleItemActive = id => {
	return {
		type: ItemActionTypes.TOGGLE_ITEM_ACTIVE,
		payload: id
	}
}

export const addItem = item => ({
	type: ItemActionTypes.ADD_ITEM,
	payload: item
})

export const deleteOne = id => ({
	type: ItemActionTypes.DELETE_ITEM,
	payload: id
})

export const updateValue = data => ({
	type: ItemActionTypes.UPDATE_INPUT_VALUE,
	payload: data
})

export const updateItemValues = values => ({
	type: ItemActionTypes.UPDATE_ITEM_VALUES,
	payload: values
})
