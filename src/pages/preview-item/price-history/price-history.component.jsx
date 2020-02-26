import React from 'react'
import { useSelector } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import PreviewNav from '../../../components/preview-nav/preview-nav.component'

import './price-history.styles.scss'

const PriceHistory = ({ match }) => {
	const id = match.params.id
	const items = useSelector(state =>
		state.itms.priceChanges.filter(item => item.id === id)
	)
	const price = items.map(item => Number(item.value))
	const time = items.map(item => item.time)

	const Options = {
		// Highcharts object for data display
		chart: {
			type: 'line'
		},
		title: {
			text: ''
		},
		xAxis: {
			title: {
				text: 'Date of change'
			},
			categories: time
		},
		yAxis: {
			title: {
				text: 'Price in $'
			}
		},
		series: [
			{
				name: 'Price',
				data: price
			}
		]
	}

	return (
		<div>
			<PreviewNav id={match.params.id} />
			<HighchartsReact highcharts={Highcharts} options={Options} />
		</div>
	)
}

export default PriceHistory
