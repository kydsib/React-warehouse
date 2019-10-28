import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './item.styles.scss'

class Item extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			EAN: '',
			type: '',
			weight: '',
			color: '',
			quantity: '',
			price: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault()

		this.setState({
			name: '',
			EAN: '',
			type: '',
			weight: '',
			color: '',
			quantity: '',
			price: ''
		})
	}

	handleChange = e => {
		const { value, name } = e.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="item-box">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						value={this.state.name}
						handleChange={this.handleChange}
						label="Name"
						required
					/>
					<FormInput
						name="EAN"
						type="number"
						value={this.state.EAN}
						handleChange={this.handleChange}
						label="EAN"
						required
					/>
					<FormInput
						name="type"
						type="text"
						value={this.state.type}
						handleChange={this.handleChange}
						label="Type"
						required
					/>
					<FormInput
						name="weight"
						type="number"
						value={this.state.weight}
						handleChange={this.handleChange}
						label="Weight"
						required
					/>
					<FormInput
						name="color"
						type="text"
						value={this.state.color}
						handleChange={this.handleChange}
						label="Color"
						required
					/>
					<FormInput
						name="quantity"
						type="number"
						value={this.state.quantity}
						handleChange={this.handleChange}
						label="Quantity"
						required
					/>
					<FormInput
						name="price"
						type="number"
						value={this.state.price}
						handleChange={this.handleChange}
						label="Price"
						required
					/>

					<CustomButton type="submit" value="Submit Data">
						Submit
					</CustomButton>
				</form>
			</div>
		)
	}
}

export default Item
