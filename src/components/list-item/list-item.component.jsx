import React from 'react'

import './list-item.styles.scss'

const ListItem = ({ id, name, ean, type, weight, color, quantity, price }) => {
	return (
		<div className="item">
			<ul key={id}>
				<li>{name}</li>
				<li>{ean}</li>
				<li>{type}</li>
				<li>{weight}</li>
				<li>{color}</li>
				<li>{quantity}</li>
				<li>{price}</li>
			</ul>
		</div>
	)
}

export default ListItem
