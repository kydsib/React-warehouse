import React from 'react'
import { connect } from 'react-redux'

import ItemActionTypes from '../../redux/item/item.types'
import './items-list.styles.scss'
import SingleItem from '../../components/single-item/single-item.component'
import TableHeader from '../../components/table-header/table-header.component'
import { selectItemsToDisplay } from '../../redux/item/item.selectors'

const ListPage = ({ itemsToList }) => {
	// Make a functional component? Or I'll need a sate here?

	return (
		<div className="list-page">
			<table>
				<TableHeader />
				<tbody>
					{itemsToList.map(item => (
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
							onClick={() => this.props.enableDisable(item.id)}
							deleteItem={() =>
								this.props.deleteItemById(item.id)
							}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

const mapStateToProps = state => {
	// gaunu object itemsToShow: {k5o2375i: {…}}
	console.log(Object.values(selectItemsToDisplay(state)))
	return {
		itemsToList: Object.values(selectItemsToDisplay(state))
	}
}

const mapDispatchToProps = dispatch => {
	return {
		enableDisable: id =>
			dispatch({ type: ItemActionTypes.TOGGLE_ITEM_ACTIVE, payload: id }),
		deleteItemById: id => {
			dispatch({ type: ItemActionTypes.DELETE_ITEM, payload: id })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
