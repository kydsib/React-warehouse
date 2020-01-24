import React from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import ListPage from './pages/items-list/items-list.component'
import NewItemPage from './pages/new-item/new-item.component'
import ItemDetail from './pages/preview-item/preview-item.component'
import EditPage from './pages/edit-item/edit-page.component'
import SignInSignUpPage from './pages/signIn-signUp/signIn-signUp.component'
import PriceHistory from './pages/preview-item/price-history/price-history.component'
import QuantityHistory from './pages/preview-item/quantity-history/quantity-history.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// import { setCurrentUser } from './redux/user/user.action' Working - comented for while I'll find new solution
import { setCurrentUser } from './redux/item/item.actions'

class App extends React.Component {
	unsubscribeFromAuth = null

	componentDidMount() {
		const { setCurrentUser } = this.props
		// open subscribtion to firebase (sign-in and sign-out)
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						// getting the actual properties on the obj form firebase
						...snapshot.data()
					})
				})
			}
			setCurrentUser(userAuth)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route
							exact
							path="/signin"
							render={() =>
								this.props.currentUser ? (
									<Redirect to="/products" /> // pakeisti i home page ="/", kai sutvarkysiu saugojima pagal user id
								) : (
									<SignInSignUpPage />
								)
							}
						/>
						<Route
							path="/products/create"
							exact
							component={NewItemPage}
						/>

						<Route
							path="/products/:id/quantityHistory"
							exact
							component={QuantityHistory}
						/>
						<Route
							path="/products/:id/priceHistory"
							exact
							component={PriceHistory}
						/>

						<Route
							path="/products/:id"
							exact
							component={ItemDetail}
						/>

						<Route path="/products" exact component={ListPage} />
						<Route
							path="/products/:id/edit"
							exact
							component={EditPage}
						/>
					</Switch>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.itms.currentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
	mapStateToProps, // access to this.props.currentUser
	mapDispatchToProps
)(App)
