import React from 'react'
import PreviewNav from '../../../components/preview-nav/preview-nav.component'

import './quantity-history.styles.scss'

const QuantityHistory = ({ match }) => {
	// without id routing breaks, on clicking back item gets undefined
	return (
		<div>
			<div className="nav">
				<PreviewNav id={match.params.id} />
			</div>
			Hi FROM QTY HISTORY
		</div>
	)
}

export default QuantityHistory
