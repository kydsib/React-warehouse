import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import ListPage from './pages/items-list/items-list.component'
import NewItemPage from './pages/new-item/new-item.component'
// import EditPage from  './pages/edit-item/edit-page.component'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/products" component={ListPage} />
				<Route exact path="/products/create" component={NewItemPage} />
			</Switch>
		</div>
	)
}

export default App
