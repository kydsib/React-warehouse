import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({ currentUser }) => (
	<div className="header">
		<div className="options">
			<NavLink className="option" to="/products" exact>
				Items list
			</NavLink>
			<NavLink className="option" to="/products/create" exact>
				Add Item
			</NavLink>
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

const mapStateToProps = state => {
	// console.log(state.itms.currentUser)
	return {
		currentUser: state.itms.currentUser
	}
}

export default connect(mapStateToProps)(Header)
