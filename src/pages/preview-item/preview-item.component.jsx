import React from 'react'
import { connect } from 'react-redux'

import './preview-item.styles.scss'
import ItemActionTypes from '../../redux/item/item.types'
import SingleItem from '../../components/single-item/single-item.component'
import PreviewNav from '../../components/preview-nav/preview-nav.component'
import TableHeader from '../../components/table-header/table-header.component'

class ItemDetail extends React.Component {
	render() {
		const singleItem = this.props.singleItemById
		console.log(singleItem.id)
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
							// conditionaly highlingting item if it is out of stock
							className={`product ${
								singleItem.quantity > 0 ? '' : 'empty-stock'
							}
							${singleItem.quantity ? 'eight' : ''}
							`}
							// second ternary is for aditional class in preview tab
							// looks too hacky, find a simpler solution
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
	console.log(state.itms.items.byId[id])
	return {
		singleItemById: state.itms.items.byId[id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// GAl cia nebereikia, nes yra items-list toks pat toggle ir perduodamas kaip propsas?
		enableDisable: id =>
			dispatch({ type: ItemActionTypes.TOGGLE_ITEM_ACTIVE, payload: id }),
		deleteItemById: id => {
			dispatch({ type: ItemActionTypes.DELETE_ITEM, payload: id })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
