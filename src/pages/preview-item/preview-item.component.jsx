import React from 'react'
import { connect } from 'react-redux'

import './preview-item.styles.scss'
import ItemActionTypes from '../../redux/item/item.types'
import ListItem from '../../components/list-item/list-item.component'
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
				<ListItem
					className={`product ${
						singleItem.quantity > 0 ? '' : 'empty-stock'
					}`}
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
					inputUpdate={() => this.props.updateInputValue(singleItem)}
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
		},
		updateInputValue: item => {
			dispatch({
				type: ItemActionTypes.UPDATE_INPUT_VALUE,
				payload: item
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
