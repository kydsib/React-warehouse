import React from 'react'
import { connect } from 'react-redux'

import { toggleItemActive, deleteItem } from '../../redux/item/item.actions'
import TableHeader from '../../components/table-header/table-header.component'
import './items-list.styles.scss'
import SingleItem from '../../components/single-item/single-item.component'
import { selectItemsToDisplay } from '../../redux/item/item.selectors'
import PaginationStrip from '../../components/pagination/pagination.component'

const ListPage = ({
	itemsToList,
	enableDisable,
	deleteItemById,
	itemsToShow,
	pageNumber
}) => {
	const numberOfItems = itemsToList.finalDataArray.length
	// Getting the total number of pages
	const numberOfPages = Math.ceil(numberOfItems / parseInt(itemsToShow))
	// Making array with number values to loop trough
	const arrOfPageNumbers = Array.from(Array(numberOfPages).keys())
	// values for dispayling right items after items per page
	const startOfSlice = pageNumber * parseInt(itemsToShow)
	const endOfSlice = parseInt(itemsToShow) + startOfSlice

	const copyOfItemsInState = [...itemsToList.finalDataArray]

	return (
		<div className="list-page">
			<table>
				<TableHeader />
				<tbody>
					{copyOfItemsInState
						.slice(startOfSlice, endOfSlice)
						.map(item => (
							<SingleItem
								className="single-item"
								key={item.id}
								id={item.id}
								name={item.name}
								ean={item.ean}
								type={item.type}
								weight={item.weight}
								color={item.color}
								active={item.active}
								onClick={() => enableDisable(item.id)}
								deleteItem={() => deleteItemById(item.id)}
							/>
						))}
				</tbody>
			</table>
			<PaginationStrip
				arr={arrOfPageNumbers}
				length={numberOfItems}
				itemsPerPage={endOfSlice}
			/>
			{/* Could I work it out without redux (the part where user sets item per page)
			maybe I could just lift the state up trough method? */}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		itemsToList: selectItemsToDisplay(state),
		itemsToShow: state.itms.itemsPerPage,
		pageNumber: state.itms.currentPage
		// data for pagination element need to know how many items there is
	}
}

const mapDispatchToProps = dispatch => {
	return {
		enableDisable: id => dispatch(toggleItemActive(id)),
		deleteItemById: id => {
			dispatch(deleteItem(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
