import React from 'react'
import { Link } from 'react-router-dom'

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
	return (
		<div className="item">
			<ul key={id}>
				<Link key={id} to={`/products/${id}`}>
					<li>Name: {name}</li>

					<li>EAN: {ean}</li>
					<li>TYPE:{type}</li>
					<li>WEIGHT: {weight}</li>
					<li>COLOR: {color}</li>
					<li>:QUANTITY: {quantity}</li>
					<li>:PRICE {price}</li>
				</Link>
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
