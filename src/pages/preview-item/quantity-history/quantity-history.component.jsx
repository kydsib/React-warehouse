import React from 'react'
import { useSelector } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import PreviewNav from '../../../components/preview-nav/preview-nav.component'
import './quantity-history.styles.scss'

const QuantityHistory = ({ match }) => {
	const id = match.params.id
	const items = useSelector(state =>
		state.itms.quantityChanges.filter(item => item.id === id)
	)
	const quantity = items.map(item => Number(item.value))
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
				text: 'Quantity in units'
			}
		},
		series: [
			{
				name: 'Quantity',
				data: quantity
			}
		]
	}

	return (
		<div>
			<div className="nav">
				<PreviewNav id={match.params.id} />
			</div>
			<HighchartsReact highcharts={Highcharts} options={Options} />
		</div>
	)
}

export default QuantityHistory
