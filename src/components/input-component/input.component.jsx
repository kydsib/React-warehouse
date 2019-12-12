import React from 'react'

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: props.name,
			value: props.value,
			id: props.id
		}
	}

	handleChange = e => {
		e.preventDefault()
		this.setState({
			value: e.target.value
		})
	}
	render() {
		return (
			<label>
				{this.state.name}
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.value}
					onBlur={this.props.onBlur}
				/>
			</label>
		)
	}
}

export default Input
