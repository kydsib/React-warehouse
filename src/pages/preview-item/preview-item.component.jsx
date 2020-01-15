import React from 'react'
import { connect } from 'react-redux'

import './preview-item.styles.scss'
import ItemActionTypes from '../../redux/item/item.types'
import TableHeader from '../../components/table-header/table-header.component'
import SingleItem from '../../components/single-item/single-item.component'
import PreviewNav from '../../components/preview-nav/preview-nav.component'

class ItemDetail extends React.Component {
	render() {
		const singleItem = this.props.singleItemById
		// Using slice of the total state (single item)
		return (
			<div>
				<div className="nav">
					<PreviewNav id={singleItem.id} />
				</div>
				<table>
					<TableHeader
						qty={singleItem.quantity}
						className={`${singleItem.quantity ? 'eight' : ''}`}
					/>
					<tbody>
						<SingleItem
							className={`product ${
								singleItem.quantity > 0 ? '' : 'empty-stock'
							}
                            ${singleItem.quantity ? 'eight' : ''}
                            `} // second ternary is for aditional class in preview tab // looks too hacky, find a simpler solution
							key={singleItem.id}
							id={singleItem.id}
							name={singleItem.name}
							ean={singleItem.ean}
							type={singleItem.type}
							weight={singleItem.weight}
							color={singleItem.color}
							quantity={singleItem.quantity}
							price={singleItem.price}
							active={singleItem.active}
							onClick={() =>
								this.props.enableDisable(singleItem.id)
							}
							deleteItem={() =>
								this.props.deleteItemById(singleItem.id)
							}
						/>
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.id
	// need to get id of SingleItem
	return {
		singleItemById: state.itms.items.find(item => item.id === id)
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
