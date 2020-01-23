import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ItemActionTypes from '../../redux/item/item.types'

import CustomButton from '../custom-button/custom-button.component'
import Input from '../input-component/input.component'
import './single-item.styles.scss'

class SingleItem extends React.Component {
	state = {
		id: this.props.id,
		name: this.props.name,
		ean: this.props.ean,
		type: this.props.type,
		weight: this.props.weight,
		color: this.props.color,
		quantity: this.props.quantity,
		price: this.props.price,
		active: this.props.active,
		time: ''
	}

	updateValue = e => {
		e.preventDefault()
		const currentDate = new Date()
		const formatedDate =
			currentDate.getFullYear() +
			'-' +
			(currentDate.getMonth() + 1) +
			'-' +
			currentDate.getDate() +
			' ' +
			currentDate.getHours() +
			':' +
			currentDate.getMinutes() +
			':' +
			currentDate.getSeconds()
		this.setState({ [e.target.name]: e.target.value, time: formatedDate })
	}

	render() {
		const singleItem = this.state
		return (
			// passing class as a prop if qty = 0

			<tr className={`grid ${this.props.className}`}>
				<td className="grid__item">{this.props.name}</td>
				<td className="grid__item">{this.props.ean}</td>
				<td className="grid__item">{this.props.type}</td>
				<td className="grid__item">{this.props.weight}</td>
				<td className="grid__item">{this.props.color}</td>
				<td className="grid-item">
					<label>
						<input
							type="checkbox"
							name="active"
							defaultChecked={this.props.active}
							onClick={this.props.onClick}
						/>
					</label>
				</td>

				{/* deciding if input fields needs to be shown in current page */}

				{this.props.quantity === undefined ? null : (
					<td>
						<Input
							onChange={this.updateValue}
							id={this.props.id}
							value={
								this.quantity === undefined
									? singleItem.quantity
									: this.quantity
							}
							name="quantity"
							onBlur={() => {
								this.props.updateInputValue(this.state)
								this.props.updateQuantityHistory(this.state)
							}}
						/>
					</td>
				)}

				{this.props.price === undefined ? null : (
					<td>
						<Input
							onChange={this.updateValue}
							id={this.props.id}
							value={
								this.price === undefined
									? singleItem.price
									: this.price
							}
							name="price"
							onBlur={() => {
								this.props.updateInputValue(this.state)
								this.props.updatePriceHistory(this.state)
							}}
						/>
					</td>
				)}

				<td>
					{/* checking if I need view button in current route */}
					<Link to={`/products/${this.props.id}`}>
						{this.props.quantity === undefined ? (
							<CustomButton>VIEW</CustomButton>
						) : null}
					</Link>

					<Link to={`/products/${this.props.id}/edit`}>
						<CustomButton>EDIT</CustomButton>
					</Link>

					<Link to={`/products`}>
						<CustomButton onClick={this.props.deleteItem}>
							DELETE
						</CustomButton>
					</Link>
				</td>
			</tr>
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
		},
		updateQuantityHistory: item => {
			dispatch({
				type: ItemActionTypes.UPDATE_QUANTITY_HISTORY,
				payload: { id: item.id, value: item.quantity, time: item.time }
			})
		},
		updatePriceHistory: item => {
			dispatch({
				type: ItemActionTypes.UPDATE_PRICE_HISTORY,
				payload: { id: item.id, value: item.price, time: item.time }
			})
		}
	}
}

export default connect(null, mapDispatchToProps)(SingleItem)
