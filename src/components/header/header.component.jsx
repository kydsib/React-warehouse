import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
	<div className="header">
		<div className="options">
			<NavLink className="option" to="/products">
				LIST
			</NavLink>
			<NavLink className="option" to="/products/{id}">
				PREVIEW
			</NavLink>
			<NavLink className="option" to="/products/create">
				NEW
			</NavLink>
			<NavLink className="option" to="/products/{id}/edit">
				EDIT
			</NavLink>
		</div>
	</div>
)

export default Header
