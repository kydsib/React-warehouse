import React from 'react'
import { NavLink } from 'react-router-dom'

import './preview-nav.styles.scss'

const PreviewNav = ({ id }) => (
	<div>
		<div key={id} className="options">
			<NavLink className="option" to={`/products/${id}`}>
				Preview
			</NavLink>
			<NavLink className="option" to={`/products/${id}/quantityHistory`}>
				Quantity History
			</NavLink>
			<NavLink className="option" to={`/products/${id}/priceHistory`}>
				Price History
			</NavLink>
		</div>
	</div>
)

export default PreviewNav
