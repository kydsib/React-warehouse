import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = () => {
	const currentUser = useSelector(state => state.itms.currentUser)
	return (
		<div className="header">
			<div className="options">
				{currentUser ? (
					<NavLink className="option" to="/products" exact>
						Items list
					</NavLink>
				) : null}

				{currentUser ? (
					<NavLink className="option" to="/products/create" exact>
						Add Item
					</NavLink>
				) : null}

				{currentUser ? (
					<NavLink
						className="option"
						onClick={() => auth.signOut()}
						to="/"
						exact
					>
						{' '}
						SIGN OUT{' '}
					</NavLink>
				) : (
					<NavLink className="option" to="/signin">
						{' '}
						SIGN IN{' '}
					</NavLink>
				)}
			</div>
		</div>
	)
}

export default Header
