import ItemActionTypes from './item.types'

// TO make separation and concerns and make actions more reusable
// we use action creatos

export const toggleItemActive = id => {
	return {
		type: ItemActionTypes.TOGGLE_ITEM_ACTIVE,
		payload: id
	}
}

export const addItem = item => ({
	type: ItemActionTypes.ADD_NEW_ITEM,
	payload: item
})

export const deleteItem = id => ({
	type: ItemActionTypes.DELETE_ITEM,
	payload: id
})

export const updateValue = data => ({
	type: ItemActionTypes.UPDATE_INPUT_VALUE,
	payload: data
})

export const updateQuantity = item => ({
	type: ItemActionTypes.UPDATE_QUANTITY_HISTORY,
	payload: { id: item.id, value: item.quantity, time: item.time }
})

export const updatePrice = item => ({
	type: ItemActionTypes.UPDATE_PRICE_HISTORY,
	payload: { id: item.id, value: item.price, time: item.time }
})

export const editItem = values => ({
	type: ItemActionTypes.EDIT_ITEM,
	payload: values
})

// turksta update qty ir price action creatoriu

// updateValue ir updateItemValues atrodo, kad nesiskiria
// negaliu pasakyti ka daro
