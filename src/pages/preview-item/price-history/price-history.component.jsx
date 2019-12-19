import React from 'react'
import { connect } from 'react-redux'

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
		categories: [...this.props.priceUpdates.time]
	},
	yAxis: {
		title: {
			text: 'Price in $'
		}
	},
	series: [
		{
			name: 'Price',
			data: [...this.props.priceUpdates.value]
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

const mapStateToProps = state => {
	return {
		value: state.itms.priceChanges.value,
		time: state.itms.priceChanges.time
	}
}

export default connect(mapStateToProps)(PriceHistory)
