import React from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { addItem } from '../../redux/item/item.actions'

import './item.styles.scss'

class Item extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			ean: '',
			type: '',
			weight: '',
			color: '',
			quantity: '',
			price: '',
			active: '',
			id: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault()

		this.setState({
			name: '',
			ean: '',
			type: '',
			weight: '',
			color: '',
			quantity: '',
			price: '',
			id: uniqid()
		})
	}

	handleChange = e => {
		const { value, name } = e.target
		console.log(this.state)

		this.setState({ [name]: value })
	}

	render() {
		const item = this.state
		console.log(item)
		return (
			<div className="item-box">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						value={this.state.name}
						handleChange={this.handleChange}
						label="name"
						required
					/>
					<FormInput
						name="ean"
						type="number"
						value={this.state.ean}
						handleChange={this.handleChange}
						label="ean"
						required
					/>
					<FormInput
						name="type"
						type="text"
						value={this.state.type}
						handleChange={this.handleChange}
						label="type"
						required
					/>
					<FormInput
						name="weight"
						type="number"
						value={this.state.weight}
						handleChange={this.handleChange}
						label="weight"
						required
					/>
					<FormInput
						name="color"
						type="text"
						value={this.state.color}
						handleChange={this.handleChange}
						label="color"
						required
					/>
					<FormInput
						name="quantity"
						type="number"
						value={this.state.quantity}
						handleChange={this.handleChange}
						label="quantity"
						required
					/>
					<FormInput
						name="price"
						type="number"
						value={this.state.price}
						handleChange={this.handleChange}
						label="price"
						required
					/>

					<CustomButton type="submit" onClick={() => addItem(item)}>
						Submit
					</CustomButton>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(
	null,
	mapDispatchToProps
)(Item)
