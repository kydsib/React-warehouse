import React from 'react'

import './preview-item.styles.scss'

function ItemDetail({ match }) {
	console.log(match)
	return (
		<div>
			<h1>rendering item {match.params.id}</h1>
		</div>
	)
}

export default ItemDetail
