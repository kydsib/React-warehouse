import React from 'react'

import Item from '../../components/item/item.component'

import './new-item.styles.scss'

class NewItemPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="new-item-container">
				<Item />
			</div>
		)
	}
}

export default NewItemPage
