import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import ListPage from './pages/items-list/items-list.component'
import NewItemPage from './pages/new-item/new-item.component'
import ItemDetail from './pages/preview-item/preview-item.component'
// import EditPage from  './pages/edit-item/edit-page.component'
import PriceHistory from './pages/preview-item/price-history/price-history.component'
import QuantityHistory from './pages/preview-item/quantity-history/quantity-history.component'

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
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
				</Switch>
			</div>
		</Router>
	)
}

export default App
