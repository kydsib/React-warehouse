import React from 'react'
import { connect } from 'react-redux'

import { toggleItemActive, deleteItem } from '../../redux/item/item.actions'
import TableHeader from '../../components/table-header/table-header.component'
import './items-list.styles.scss'
import SingleItem from '../../components/single-item/single-item.component'

const ListPage = ({ itemsFromStore, enableDisable, deleteItemById }) => {
	return (
		<div className="list-page">
			<table>
				<TableHeader />
				<tbody>
					{itemsFromStore.map(item => (
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
		</div>
	)
}

const mapStateToProps = state => {
	return {
		itemsFromStore: state.itms.items
		// state.itms.items - because root reducer (combined reducers)
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
