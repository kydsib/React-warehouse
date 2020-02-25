import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
	updateValue,
	updatePrice,
	updateQuantity
} from '../../redux/item/item.actions'
import CustomButton from '../custom-button/custom-button.component'
import Input from '../input-component/input.component'
import './single-item.styles.scss'

class SingleItem extends React.Component {
	// Initializing State from Props In most cases, this is an antipattern. Don’t “copy props into state.” It creates a second source of truth for your data, which usually leads to bugs. One source of truth is best.
	// However, it’s not an anti-pattern if you make it clear that the prop is only seed data for the component’s internally-controlled state.s

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
			<tr className={`grid ${this.props.className}`}>
				<td className="grid__item">
					<span className="alignment">{this.props.name}</span>
				</td>
				<td className="grid__item">
					<span className="alignment">{this.props.ean}</span>
				</td>
				<td className="grid__item">
					<span className="alignment">{this.props.type}</span>
				</td>
				<td className="grid__item">
					<span className="alignment">{this.props.weight}</span>
				</td>
				<td className="grid__item">
					<span className="alignment">{this.props.color}</span>
				</td>
				<td className="grid-item">
					<label className="alignment">
						<input
							type="checkbox"
							name="active"
							defaultChecked={this.props.active}
							onClick={this.props.onClick}
						/>
					</label>
				</td>

				{/* deciding if input fields needs to be shown in current page */}
				{this.props.price === undefined ? null : (
					<td>
						<Input
							onChange={this.updateValue}
							id={this.props.id}
							// value galeciau pasiimti per propsus o renderinti tikrindamas ar is mapState ateianti value skiriasi nuo prosps ir pakeisiti
							value={singleItem.price}
							name="price"
							onBlur={() => {
								this.props.updateInputValue(this.state)
								this.props.updatePriceHistory(this.state)
							}}
						/>
					</td>
				)}
				{this.props.quantity === undefined ? null : (
					<td>
						<Input
							onChange={this.updateValue}
							id={this.props.id}
							value={singleItem.quantity}
							name="quantity"
							onBlur={() => {
								this.props.updateInputValue(this.state)
								this.props.updateQuantityHistory(this.state)
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
			dispatch(updateValue(item))
		},
		updateQuantityHistory: item => {
			dispatch(updateQuantity(item))
		},
		updatePriceHistory: item => {
			dispatch(updatePrice(item))
		}
	}
}

export default connect(null, mapDispatchToProps)(SingleItem)
