import React from 'react'
import { Link } from 'react-router-dom'

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
	deleteItem
}) => {
	return (
		<div className="item">
			<ul key={id}>
				<li>Name: {name}</li>

				<li>EAN: {ean}</li>
				<li>TYPE:{type}</li>
				<li>WEIGHT: {weight}</li>
				<li>COLOR: {color}</li>
				{price === undefined ? null : (
					<Input id={id} value={quantity} name="Quantity" />
				)}
				{quantity === undefined ? null : (
					<Input id={id} value={price} name="Price" />
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

export default ListItem
