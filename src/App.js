import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import './App.css'

import HomePage from './pages/home-page/home-page.component'
import Header from './components/header/header.component'
import ListPage from './pages/items-list/items-list.component'
import NewItemPage from './pages/new-item/new-item.component'
import ItemDetail from './pages/preview-item/preview-item.component'
import EditPage from './pages/edit-item/edit-page.component'
import SignInSignUpPage from './pages/signIn-signUp/signIn-signUp.component'
import PriceHistory from './pages/preview-item/price-history/price-history.component'
import QuantityHistory from './pages/preview-item/quantity-history/quantity-history.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/item/item.actions'

const App = () => {
	const [unsubscribeFromAuth, setUnsubscribeFromAut] = useState(null)
	const currentUser = useSelector(state => state.itms.currentUser)
	const dispatch = useDispatch()

	useEffect(() => {
		// open subscribtion to firebase (sign-in and sign-out)
		auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapshot => {
					dispatch(
						setCurrentUser({
							id: snapshot.id,
							// getting the actual properties on the obj form firebase
							...snapshot.data()
						})
					)
				})
			}
			dispatch(setCurrentUser(userAuth))
		})
	}, [dispatch, unsubscribeFromAuth])

	useEffect(() => setUnsubscribeFromAut(null), [unsubscribeFromAuth])

	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? (
								<Redirect to="/" />
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

					<Route path="/products/:id" exact component={ItemDetail} />

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

export default App
