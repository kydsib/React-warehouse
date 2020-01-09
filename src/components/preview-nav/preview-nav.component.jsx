import React from 'react'
import { NavLink } from 'react-router-dom'

import './preview-nav.styles.scss'

const PreviewNav = ({ id }) => (
	<div>
		<div key={id} className="options">
			<NavLink to={`/products/${id}`} exact>
				Preview
			</NavLink>
			<NavLink to={`/products/${id}/priceHistory`} exact>
				Price History
			</NavLink>
			<NavLink to={`/products/${id}/quantityHistory`} exact>
				Quantity History
			</NavLink>
		</div>
	</div>
)

export default PreviewNav
