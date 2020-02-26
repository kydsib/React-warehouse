import React, { useState } from 'react'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FromInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

const SignIn = () => {
	const [params, setParams] = useState({
		email: '',
		password: ''
	})

	const handleSubmit = async event => {
		event.preventDefault()
		const { email, password } = params

		try {
			await auth.signInWithEmailAndPassword(email, password)
			setParams({ email: '', password: '' })
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = event => {
		const { value, name } = event.target

		setParams({ [name]: value })
	}

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FromInput
					name="email"
					type="email"
					value={params.email}
					handleChange={handleChange}
					label="email"
					required
				/>

				<FromInput
					name="password"
					type="password"
					value={params.password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

export default SignIn
