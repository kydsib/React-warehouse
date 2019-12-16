import React from 'react'

const Input = ({ name, onChange, onBlur, value }) => {
	return (
		<label>
			{name}
			<input
				type="text"
				onChange={onChange}
				name={name}
				value={value}
				onBlur={onBlur}
			/>
		</label>
	)
}

export default Input
