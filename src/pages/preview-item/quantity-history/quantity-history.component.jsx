import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import PreviewNav from '../../../components/preview-nav/preview-nav.component'
import './quantity-history.styles.scss'

const options = {
	chart: {
		type: 'line'
	},
	title: {
		text: 'QuantityHistory'
	},
	xAxis: {
		title: {
			text: 'Date of change'
		},
		categories: ['2019-07-19', '2019-07-20', '2019-09-19']
	},
	yAxis: {
		title: {
			text: 'Quantity in units'
		}
	},
	series: [
		{
			name: 'Quantity',
			data: [12, 8, 3, 9, 32]
		}
	]
}

const QuantityHistory = ({ match }) => {
	// without id routing breaks, on clicking back item gets undefined
	return (
		<div>
			<div className="nav">
				<PreviewNav id={match.params.id} />
			</div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}

export default QuantityHistory
