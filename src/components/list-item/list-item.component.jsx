import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ItemActionTypes from '../../redux/item/item.types'

import CustomButton from '../custom-button/custom-button.component'
import Input from '../input-component/input.component'
import './list-item.styles.scss'

class ListItem extends React.Component {
	state = {
		id: this.props.id,
		name: this.props.name,
		ean: this.props.ean,
		type: this.props.type,
		wight: this.props.wight,
		color: this.props.color,
		quantity: this.props.quantity,
		price: this.props.price,
		active: this.props.active
	}

	updateValue = e => {
		e.preventDefault()
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		const singleItem = this.state
		console.log(singleItem)
		return (
			<div>
				<ul className={this.props.className}>
					<li>Name: {this.props.name}</li>

					<li>EAN: {this.props.ean}</li>
					<li>TYPE:{this.props.type}</li>
					<li>WEIGHT: {this.props.weight}</li>
					<li>COLOR: {this.props.color}</li>

					{this.props.price === undefined ? null : (
						<Input
							onChange={this.updateValue}
							id={this.props.id}
							value={
								this.price === undefined
									? singleItem.price
									: this.price
							}
							name="price"
							onBlur={() =>
								this.props.updateInputValue(this.state)
							}
						/>
					)}
					{this.props.quantity === undefined ? null : (
						<Input
							onChange={this.updateValue}
							id={this.props.id}
							value={
								this.quantity === undefined
									? singleItem.quantity
									: this.quantity
							}
							onBlur={() =>
								this.props.updateInputValue(this.state)
							}
							name="quantity"
						/>
					)}
					<label>
						Deactivate
						<input
							type="checkbox"
							name="active"
							defaultChecked={this.props.active}
							onClick={this.props.onClick}
						/>
					</label>
				</ul>
				<Link to={`/products/${this.props.id}`}>
					<CustomButton>VIEW</CustomButton>
				</Link>
				<Link to={`/products/${this.props.id}/edit`}>
					<CustomButton>EDIT</CustomButton>
				</Link>
				<Link to={`/products`}>
					<CustomButton onClick={this.props.deleteItem}>
						DELETE
					</CustomButton>
				</Link>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateInputValue: item => {
			dispatch({
				type: ItemActionTypes.UPDATE_INPUT_VALUE,
				payload: item
			})
		}
	}
}

export default connect(null, mapDispatchToProps)(ListItem)
