import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import Input from '../input-component/input.component'
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
	onClick,
	deleteItem,
	inputUpdate,
	className
}) => {
	// const [qty, setQty] = useState
	return (
		<div>
			<ul className={className}>
				<li>Name: {name}</li>

				<li>EAN: {ean}</li>
				<li>TYPE:{type}</li>
				<li>WEIGHT: {weight}</li>
				<li>COLOR: {color}</li>
				{/* Checking if price and qty needs to be rendered on specific page */}
				{price === undefined ? null : (
					<Input
						id={id}
						value={price}
						onBlur={inputUpdate}
						name="Price"
					/>
				)}
				{quantity === undefined ? null : (
					<Input
						id={id}
						value={quantity}
						onBlur={inputUpdate}
						name="Quantity"
					/>
				)}
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
			<Link to={`/products/${id}`}>
				<CustomButton>VIEW</CustomButton>
			</Link>
			<Link to={`/products/${id}/edit`}>
				<CustomButton>EDIT</CustomButton>
			</Link>
			<Link to={`/products`}>
				<CustomButton onClick={deleteItem}>DELETE</CustomButton>
			</Link>
		</div>
	)
}

// const mapDispatchToProps = dispatch => {
// 		updateInputValue: item => {
// 			dispatch({
// 				type: ItemActionTypes.UPDATE_INPUT_VALUE,
// 				payload: item
// 			})
// 		}
// }

// export default connect(null, mapDispatchToProps)(ListItem)

export default ListItem
