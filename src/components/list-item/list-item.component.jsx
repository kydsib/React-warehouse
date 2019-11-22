import React from 'react'
import { connect } from 'react-redux'

import ItemActionTypes from '../../redux/item/item.types'

import CustomButton from '../custom-button/custom-button.component'
import './list-item.styles.scss'

const ListItem = ({
	key,
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
			<ul key={key}>
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

export default ListItem
