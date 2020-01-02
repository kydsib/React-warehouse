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
			text: 'Quantity History'
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

const mapStateToProps = state => ({
	quantity: state.itms.quantityChanges.value,
	time: state.itms.quantityChanges.time
})

export default connect(mapStateToProps)(QuantityHistory)
