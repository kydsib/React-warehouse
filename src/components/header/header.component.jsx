import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
	<div className="header">
		<div className="options">
			<NavLink className="option" to="/products" exact>
				Items list
			</NavLink>
			<NavLink className="option" to="/products/create" exact>
				Add Item
			</NavLink>
		</div>
	</div>
)

export default Header
