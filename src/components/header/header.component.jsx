import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({ currentUser }) => (
	<div className="header">
		<div className="options">
			<NavLink className="option" to="/products" exact>
				LIST
			</NavLink>
			<NavLink className="option" to="/products/create" exact>
				NEW
			</NavLink>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					{' '}
					SIGN OUT{' '}
				</div>
			) : (
				<NavLink className="option" to="/signin">
					{' '}
					SIGN IN{' '}
				</NavLink>
			)}
		</div>
	</div>
)

const mapStateToProps = ({ user: { currentUser } }) => ({
	currentUser
})

export default connect(mapStateToProps)(Header)
