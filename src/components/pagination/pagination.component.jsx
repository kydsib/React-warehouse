import React from 'react'
import { connect } from 'react-redux'

import './pagination.styles.scss'
import { selectItemsToDisplay } from '../../redux/item/item.selectors'

import { itemsPerPage } from '../../redux/item/item.actions'

class PaginationStrip extends React.Component {
	state = {
		itemsPerPage: ''
	}
	// Do I need some king of checking if I need to use mapState, to get items?
	// If I use Redux I could keep itemsPerPage value there and do rendering only when its changed
	// How does the app know how many pages to render if itemsPerPage value is only in components state?

	handleChange = e => {
		e.preventDefault()
		let { name, value } = e.target
		this.setState({ [name]: value })
		// why setItemsPerPage(this.state.itemsPerPage) doesnt work?
		this.props.setItemsPerPage(value)
	}

	render() {
		return (
			<div className="container">
				<div className="items-per-page-box">
					<span>View </span>
					{/* might need to set the default value */}
					<select onChange={this.handleChange}>
						{/* how to get value of option, that I could dispatch? */}
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
				</div>
				<div className="select-page">select page</div>
			</div>
		)
	}
}

// Might not need a dispatch. If I keep items per page val ir local state
// I only need mapState... to get x= val. elements from Redux state
const mapDispatchToProps = dispatch => {
	return {
		setItemsPerPage: value => dispatch(itemsPerPage(value))
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
