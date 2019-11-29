import React from 'react'
import { connect } from 'react-redux'

import './preview-item.styles.scss'
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

export default connect(mapStateToProps)(ItemDetail)
