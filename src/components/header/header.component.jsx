import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
	<div className="header">
		<div className="options">
			<NavLink className="option" to="/products" exact>
				LIST
			</NavLink>
			<NavLink className="option" to="/products/create" exact>
				NEW
			</NavLink>
		</div>
	</div>
)

export default Header
