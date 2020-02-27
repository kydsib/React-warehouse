import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

const SignUp = () => {
	const [params, setParams] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const handleChange = event => {
		const { name, value } = event.target

		this.setState({ [name]: value })
	}

	// Need to useEffect here? Bug with sign in w/ password might be here
	const handleSubmit = async event => {
		event.preventDefault()
		const { displayName, email, password, confirmPassword } = params
		if (password !== confirmPassword) {
			alert(`Passwords don't match`)
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			)

			await createUserProfileDocument(user, { displayName })
			setParams({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span> Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={params.displayName}
					onChange={handleChange}
					label="Display Name"
					required
				></FormInput>
				<FormInput
					type="text"
					name="email"
					value={params.email}
					onChange={handleChange}
					label="Email"
					required
				></FormInput>
				<FormInput
					type="password"
					name="password"
					value={params.password}
					onChange={handleChange}
					label="Password"
					required
				></FormInput>
				<FormInput
					type="password"
					name="confirmPassword"
					value={params.confirmPassword}
					onChange={handleChange}
					label="Password confirm"
					required
				></FormInput>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	)
}

export default SignUp
