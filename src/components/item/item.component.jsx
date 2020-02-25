import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { addItem } from '../../redux/item/item.actions'

import './item.styles.scss'

const Item = () => {
	const [params, setParams] = useState({
		name: '',
		ean: '',
		type: '',
		weight: '',
		color: '',
		quantity: '',
		price: '',
		active: '',
		id: ''
	})

	const handleSubmit = e => {
		e.preventDefault()

		setParams({
			...params,
			name: '',
			ean: '',
			type: '',
			weight: '',
			color: '',
			quantity: '',
			price: '',
			active: '',
			id: ''
		})
	}

	const handleChange = e => {
		console.log(params)
		e.preventDefault()
		const { value, name } = e.target

		setParams({
			...params,
			[name]: value,
			id: uniqid(),
			active: true
		})
	}

	const dispatch = useDispatch()

	return (
		<div className="item-box">
			<form onSubmit={handleSubmit}>
				<FormInput
					name="name"
					type="text"
					value={params.name}
					handleChange={handleChange}
					label="name"
					required
				/>
				<FormInput
					name="ean"
					type="number"
					value={params.ean}
					handleChange={handleChange}
					label="ean"
					required
				/>
				<FormInput
					name="type"
					type="text"
					value={params.type}
					handleChange={handleChange}
					label="type"
					required
				/>
				<FormInput
					name="weight"
					type="number"
					value={params.weight}
					handleChange={handleChange}
					label="weight"
					required
				/>
				<FormInput
					name="color"
					type="text"
					value={params.color}
					handleChange={handleChange}
					label="color"
					required
				/>
				<FormInput
					name="quantity"
					type="number"
					value={params.quantity}
					handleChange={handleChange}
					label="quantity"
					required
				/>
				<FormInput
					name="price"
					type="number"
					value={params.price}
					handleChange={handleChange}
					label="price"
					required
				/>

				<CustomButton
					type="submit"
					onClick={() => dispatch(addItem(params))}
				>
					Submit
				</CustomButton>
			</form>
		</div>
	)
}

export default Item
