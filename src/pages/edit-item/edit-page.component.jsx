import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateValue } from '../../redux/item/item.actions'
import FormInput from './../../components/form-input/form-input.component'
import CustomButton from './../../components/custom-button/custom-button.component'
import './edit-page.styles.scss'

const EditPage = ({ match }) => {
	// EditPage is nested in Route so I can use match to get item id
	const itemId = match.params.id
	const itemToEddit = useSelector(state => state.itms.items.byId[itemId])

	const [params, setParams] = useState({
		id: itemToEddit.id,
		name: itemToEddit.name,
		ean: itemToEddit.ean,
		type: itemToEddit.type,
		weight: itemToEddit.weight,
		color: itemToEddit.color,
		active: itemToEddit.active,
		quantity: itemToEddit.quantity,
		price: itemToEddit.price
	})

	const dispatch = useDispatch()

	const handleChange = e => {
		e.preventDefault()
		const { value, name } = e.target

		setParams({ ...params, [name]: value })
	}

	return (
		<div className="item-box">
			<FormInput
				value={params.name}
				name="name"
				handleChange={handleChange}
				label="name"
				required
			/>
			<FormInput
				value={params.ean}
				name="ean"
				handleChange={handleChange}
				label="ean"
				required
			/>
			<FormInput
				value={params.type}
				name="type"
				handleChange={handleChange}
				label="type"
				required
			/>
			<FormInput
				value={params.weight}
				name="weight"
				handleChange={handleChange}
				label="weight"
				required
			/>
			<FormInput
				value={params.color}
				name="color"
				handleChange={handleChange}
				label="color"
				required
			/>
			<FormInput
				value={params.quantity}
				name="quantity"
				handleChange={handleChange}
				label="quantity"
				required
			/>
			<FormInput
				value={params.price}
				name="price"
				handleChange={handleChange}
				label="price"
				required
			/>
			<Link to={`/products`}>
				<CustomButton
					type="submit"
					// dispatching updated values
					onClick={() => dispatch(updateValue(params))}
				>
					Save
				</CustomButton>
			</Link>
		</div>
	)
}

export default EditPage
