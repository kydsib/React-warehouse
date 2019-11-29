import React from 'react'
import { connect } from 'react-redux'

import './preview-item.styles.scss'
import ItemActionTypes from '../../redux/item/item.types'
import ListItem from '../../components/list-item/list-item.component'

class ItemDetail extends React.Component {
	render() {
		const singleItem = this.props.singleItemById
		console.log(singleItem)
		return (
			<div>
				<ListItem
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
					onClick={() => this.props.enableDisable(singleItem.id)}
					deleteItem={() => this.props.deleteItemById(singleItem.id)}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.id
	// need to get id of single ListItem
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
