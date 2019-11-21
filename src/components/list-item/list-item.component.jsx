import React from 'react'
import { connect } from 'react-redux'

import ItemActionTypes from '../../redux/item/item.types'

import CustomButton from '../custom-button/custom-button.component'
import './list-item.styles.scss'

const ListItem = ({
	id,
	name,
	ean,
	type,
	weight,
	color,
	quantity,
	price,
	active,
	onClick
}) => {
	// const handleCheckbox = () => {
	// 	// ar cia turreciau trackinti state ir ji updeitinti ar tai daryti paciame reduceryje?
	// }

	return (
		<div className="item">
			<ul key={id}>
				<li>Name: {name}</li>
				<li>EAN: {ean}</li>
				<li>TYPE:{type}</li>
				<li>WEIGHT: {weight}</li>
				<li>COLOR: {color}</li>
				<li>:QUANTITY: {quantity}</li>
				<li>:PRICE {price}</li>
				<label>
					Deactivate
					<input
						type="checkbox"
						name="active"
						defaultChecked={active}
						onClick={onClick}
					/>
				</label>
			</ul>
			<CustomButton>VIEW</CustomButton>
			<CustomButton>EDIT</CustomButton>
			<CustomButton>DELETE</CustomButton>
		</div>
	)
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		enableDisable: id => dispatch(toggleItemActive(id))
//  Attempted import error: '../../redux/item/item.actions' does not contain a default export (imported as 'toggleItemActive').
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		newActive: state.itms.items
// 		// store.rootreducer(itemReducer name)/stored values in itemreducer
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		enableDisable: id =>
// 			dispatch({ type: ItemActionTypes.TOGGLE_ITEM_ACTIVE, payload: id })
// 	}
// // }
// export default connect(null, mapDispatchToProps)(ListItem)
export default ListItem
