import React from 'react'
import PreviewNav from '../../../components/preview-nav/preview-nav.component'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import './price-history.styles.scss'

const options = {
	chart: {
		type: 'line'
	},
	title: {
		text: 'Price History'
	},
	xAxis: {
		title: {
			text: 'Date of change'
		},
		categories: ['2019-07-19', '2019-07-20', '2019-09-19']
	},
	yAxis: {
		title: {
			text: 'Price in $'
		}
	},
	series: [
		{
			name: 'Price',
			data: [5, 7, 3]
		}
	]
}

const PriceHistory = ({ match }) => {
	return (
		<div>
			<PreviewNav id={match.params.id} />
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}

export default PriceHistory
