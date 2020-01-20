import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import Item from './../../components/item/item.component'
import { editItem } from '../../redux/item/item.actions'
import FormInput from './../../components/form-input/form-input.component'
import CustomButton from './../../components/custom-button/custom-button.component'
import './edit-page.styles.scss'

class EditPage extends React.Component {
	// initialiing item state from redux data
	state = {
		id: this.props.id,
		name: this.props.name,
		ean: this.props.ean,
		type: this.props.type,
		weight: this.props.weight,
		color: this.props.color,
		active: this.props.active,
		quantity: this.props.quantity,
		price: this.props.price
	}

	handleChange = e => {
		e.preventDefault()
		const { value, name } = e.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className="item-box">
				<FormInput
					value={this.state.name}
					name="name"
					handleChange={this.handleChange}
					label="name"
					required
				/>
				<FormInput
					value={this.state.ean}
					name="ean"
					handleChange={this.handleChange}
					label="ean"
					required
				/>
				<FormInput
					value={this.state.type}
					name="type"
					handleChange={this.handleChange}
					label="type"
					required
				/>
				<FormInput
					value={this.state.weight}
					name="weight"
					handleChange={this.handleChange}
					label="weight"
					required
				/>
				<FormInput
					value={this.state.color}
					name="color"
					handleChange={this.handleChange}
					label="color"
					required
				/>
				<FormInput
					value={this.state.quantity}
					name="quantity"
					handleChange={this.handleChange}
					label="quantity"
					required
				/>
				<FormInput
					value={this.state.price}
					name="price"
					handleChange={this.handleChange}
					label="price"
					required
				/>
				<Link to={`/products`}>
					<CustomButton
						type="submit"
						// dispatching updated values
						onClick={() => this.props.updateItemValues(this.state)}
					>
						Save
					</CustomButton>
				</Link>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	// geting id and finding item to edit
	const id = ownProps.match.params.id
	const currentItem = state.itms.items.find(item => item.id === id)
	return {
		// item data from redux state
		id: currentItem.id,
		name: currentItem.name,
		ean: currentItem.ean,
		type: currentItem.type,
		weight: currentItem.weight,
		color: currentItem.color,
		quantity: currentItem.quantity,
		price: currentItem.price,
		active: currentItem.active
	}
}

const mapDispatchToProps = dispatch => ({
	updateItemValues: values => dispatch(editItem(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
