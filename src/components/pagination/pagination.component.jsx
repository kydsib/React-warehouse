import React from 'react'
import { connect } from 'react-redux'

import './pagination.styles.scss'

import Span from './span/span.component'

import { itemsPerPage, currentPage } from '../../redux/item/item.actions'

class PaginationStrip extends React.Component {
	handleChange = e => {
		e.preventDefault()
		let { value } = e.target
		this.props.setItemsPerPage(value)
	}

	render() {
		return (
			<div className="container">
				<div className="items-per-page-box">
					<span>View </span>
					{/* might need to set the default value */}
					<select onChange={this.handleChange}>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
				</div>
				<div className="select-page">
					select page
					{/* TODO
				4. What would be the logic of showing pages if there are more of those 20 etc.
				*/}
					<div>
						{this.props.arr.map(page => (
							<Span
								onClick={() => this.props.setCurrentPage(page)}
								number={page + 1} // turiu perduoti arr?
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

const mapDispatchToProps = dispatch => {
	return {
		setItemsPerPage: value => dispatch(itemsPerPage(value)),
		setCurrentPage: value => dispatch(currentPage(value))
	}
}

export default connect(null, mapDispatchToProps)(PaginationStrip)
