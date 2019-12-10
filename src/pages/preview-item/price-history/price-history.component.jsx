import React from 'react'
import PreviewNav from '../../../components/preview-nav/preview-nav.component'

import './price-history.styles.scss'

const PriceHistory = ({ match }) => (
	<div>
		<PreviewNav id={match.params.id} />
		Hi from Price History
	</div>
)

export default PriceHistory
