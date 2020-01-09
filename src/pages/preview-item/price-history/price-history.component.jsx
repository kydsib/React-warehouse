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

const mapStateToProps = (state, ownProps) => {
	// getting id of specific item
	const id = ownProps.match.params.id
	// geting all the data of changes by item id
	const items = state.itms.priceChanges.filter(item => item.id === id)

	const prices = items.map(item => Number(item.value))
	const times = items.map(item => item.time)
	return {
		id: id,
		price: prices,
		time: times
	}
}

export default connect(mapStateToProps)(PriceHistory)
