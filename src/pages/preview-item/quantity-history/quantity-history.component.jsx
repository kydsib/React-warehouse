import React from 'react'
import { connect } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import PreviewNav from '../../../components/preview-nav/preview-nav.component'
import './quantity-history.styles.scss'

const QuantityHistory = ({ match, time, quantity }) => {
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

const mapStateToProps = (state, ownProps) => {
	// getting id of specific item
	const id = ownProps.match.params.id
	// geting all the data of changes by item id
	const items = state.itms.quantityChanges.filter(item => item.id === id)

	const quantities = items.map(item => Number(item.value))
	const times = items.map(item => item.time)
	return {
		id: id,
		quantity: quantities,
		time: times
	}
}

export default connect(mapStateToProps)(QuantityHistory)
