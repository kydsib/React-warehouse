import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
	updateValue,
	updatePrice,
	updateQuantity
} from '../../redux/item/item.actions'
import CustomButton from '../custom-button/custom-button.component'
import Input from '../input-component/input.component'
import './single-item.styles.scss'

const SingleItem = ({
	className,
	id,
	name,
	ean,
	type,
	weight,
	color,
	active,
	price,
	quantity,
	onClick,
	deleteItem
}) => {
	const [params, setParams] = useState({
		name,
		id,
		ean,
		type,
		weight,
		color,
		active,
		price,
		quantity,
		time: ''
	})

	const letsUpadate = e => {
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

		setParams({
			...params,
			[e.target.name]: e.target.value,
			time: formatedDate
		})
	}

	const dispatch = useDispatch()

	return (
		<tr key={id} className={`grid ${className}`}>
			<td className="grid__item">
				<span className="alignment">{name}</span>
			</td>
			<td className="grid__item">
				<span className="alignment">{ean}</span>
			</td>
			<td className="grid__item">
				<span className="alignment">{type}</span>
			</td>
			<td className="grid__item">
				<span className="alignment">{weight}</span>
			</td>
			<td className="grid__item">
				<span className="alignment">{color}</span>
			</td>
			<td className="grid-item">
				<label className="alignment">
					<input
						type="checkbox"
						name="active"
						defaultChecked={active}
						onClick={onClick}
					/>
				</label>
			</td>

			{/* deciding if input fields needs to be shown in current page */}
			{price === undefined ? null : (
				<td>
					<Input
						onChange={letsUpadate}
						id={id}
						// value galeciau pasiimti per propsus o renderinti tikrindamas ar is mapState ateianti value skiriasi nuo prosps ir pakeisiti
						value={params.price}
						name="price"
						onBlur={() => {
							dispatch(updateValue(params))
							dispatch(updatePrice(params))
						}}
					/>
				</td>
			)}
			{quantity === undefined ? null : (
				<td>
					<Input
						onChange={letsUpadate}
						id={id}
						value={params.quantity}
						name="quantity"
						onBlur={() => {
							console.log('hehe')
							dispatch(updateValue(params))
							dispatch(updateQuantity(params))
						}}
					/>
				</td>
			)}

			<td>
				{/* checking if I need view button in current route */}
				<Link to={`/products/${id}`}>
					{quantity === undefined ? (
						<CustomButton>VIEW</CustomButton>
					) : null}
				</Link>

				<Link to={`/products/${id}/edit`}>
					<CustomButton>EDIT</CustomButton>
				</Link>

				<Link to={`/products`}>
					<CustomButton onClick={deleteItem}>DELETE</CustomButton>
				</Link>
			</td>
		</tr>
	)
}

export default SingleItem
