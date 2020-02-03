import React from 'react'
import { connect } from 'react-redux'

import './pagination.styles.scss'
import { selectItemsToDisplay } from '../../redux/item/item.selectors'
import Span from './span/span.component'

import { itemsPerPage, currentPage } from '../../redux/item/item.actions'

class PaginationStrip extends React.Component {
	// state = {
	// 	itemsPerPage: '',
	// 	currentPage: ''
	// }
	// Do I need some king of checking if I need to use mapState, to get items?
	// If I use Redux I could keep itemsPerPage value there and do rendering only when its changed
	// How does the app know how many pages to render if itemsPerPage value is only in components state?

	handleChange = e => {
		e.preventDefault()
		let { value } = e.target
		// this.setState({ itemsPerPage: value })
		// console.log(this.state)
		this.props.setItemsPerPage(value)
	}

	calculatePages = () => {
		// need to call it everytime redux state changes
		// what would be the best way to do this?
		// Get the number of items in state
		let length = this.props.length
		let itemsPerPage = parseInt(this.props.itemsPerPage)
		// Users items per page current value
		let totalPages = Math.ceil(length / itemsPerPage)
		// Aray of pages to loop trough
		let pagesValuesInArray = Array.from(Array(totalPages).keys())

		return pagesValuesInArray
	}

	// flipPage = e => {
	// 	e.preventDefault()
	// 	let { value } = e.target
	// 	// this.setState({ currentPage: value })
	// 	this.props.setCurrentPage(value)
	// 	// Need to get value of span on whitch was clicked
	// 	// Dispatch new action, to change state
	// 	// Show new items for the specific page
	// 	// what would be the logic for showing the right items?
	// }

	render() {
		return (
			<div className="container">
				<div className="items-per-page-box">
					<span>View </span>
					{/* might need to set the default value */}
					<select
						onChange={this.handleChange}
						onClick={this.calculatePages}
					>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
				</div>
				<div className="select-page">
					select page
					{/* TODO
				1. Get info about how many items there is 
				2. Function to calculate how many spans there should be 
				3. Ability to dynamicly insert spans by the amount of items and items per page
				4. What would be the logic of showing pages if there are more of those 20 etc.
				*/}
					<div>
						{this.calculatePages().map(page => (
							<Span
								onClick={() => this.props.setCurrentPage(page)}
								number={page + 1}
								key={page}
								id={page}
								value={page + 1}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

// Might not need a dispatch. If I keep items per page val ir local state
// I only need mapState... to get x= val. elements from Redux state
const mapDispatchToProps = dispatch => {
	return {
		setItemsPerPage: value => dispatch(itemsPerPage(value)),
		setCurrentPage: value => dispatch(currentPage(value))
	}
}

// const mapStateToProps = state => {
// 	// 1 need to use selector to filter out items by user? slectItemsToDisplay
// 	// 2. need to take only x amoutn of items
// 	console.log(selectItemsToDisplay(state))

// 	return {
// 		itemsReturned: selectItemsToDisplay(state)
// 	}
// }

export default connect(null, mapDispatchToProps)(PaginationStrip)
