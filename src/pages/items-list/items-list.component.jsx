import React from 'react'
import { connect } from 'react-redux'

import ItemActionTypes from '../../redux/item/item.types'
import './items-list.styles.scss'
import ListItem from '../../components/list-item/list-item.component'

class ListPage extends React.Component {
	// Make a functional component? Or I'll need a sate here?

	render() {
		return (
			<div>
				{this.props.itemsFromStore.map(item => (
					<ListItem
						key={item.id}
						id={item.id}
						name={item.name}
						ean={item.ean}
						type={item.type}
						weight={item.weight}
						color={item.color}
						active={item.active}
						onClick={() => this.props.enableDisable(item.id)}
						deleteItem={() => this.props.deleteItemById(item.id)}
					/>
				))}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		itemsFromStore: state.itms.items
		// state.itms.items - because root reducer (combined reducers)
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
