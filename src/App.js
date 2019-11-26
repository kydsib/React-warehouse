import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import ListPage from './pages/items-list/items-list.component'
import NewItemPage from './pages/new-item/new-item.component'
import ItemDetail from './pages/preview-item/preview-item.component'
// import EditPage from  './pages/edit-item/edit-page.component'

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
					<Route path="/products/:id" exact component={ItemDetail} />

					<Route path="/products" exact component={ListPage} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
