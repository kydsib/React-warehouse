import React from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import PreviewNav from '../../../components/preview-nav/preview-nav.component'

import './price-history.styles.scss'

const PriceHistory = ({ match, time, price }) => {
	const Options = {
		// Highcharts object for data display
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

const mapStateToProps = state => ({
	price: state.itms.priceChanges.value,
	time: state.itms.priceChanges.time
})

export default connect(mapStateToProps)(PriceHistory)
