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
	itemsToShow
}) => {
	// need loguc for numbers in slice method (starting number - depends on page, items to return - depends on what user selected)
	const startOfSlice = () => {}

	const endOfSlice = itemsToShow
	const copyOfItemsInState = [...itemsToList.finalDataArray]
	return (
		<div className="list-page">
			<table>
				<TableHeader />
				<tbody>
					{copyOfItemsInState.slice(0, endOfSlice).map(item => (
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
			<PaginationStrip />
			{/* Could I work it out without redux (the part where user sets item per page)
			maybe I could just lift the state up trough method? */}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		itemsToList: selectItemsToDisplay(state),
		itemsToShow: state.itms.itemsPerPage
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
