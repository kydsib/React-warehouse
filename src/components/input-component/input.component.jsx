import React from 'react'
import { connect } from 'react-redux'
import ItemActionTypes from '../../redux/item/item.types'
import { id } from 'postcss-selector-parser'

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
					onBlur={() => this.props.changeValue(this.state)}
				/>
			</label>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	changeValue: data =>
		dispatch({ type: ItemActionTypes.UPDATE_VALUES, payload: data })
})

export default connect(null, mapDispatchToProps)(Input)
