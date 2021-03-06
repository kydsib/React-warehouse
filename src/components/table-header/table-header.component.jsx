import React from 'react'
import './table-header.styles.scss'

const TableHeader = ({ qty }) => {
	return (
		<thead>
			<tr className={`grid ${qty ? 'eight' : ''}`}>
				<th className="grid_item">name</th>
				<th className="grid_item">ean</th>
				<th className="grid_item">type</th>
				<th className="grid_item">weight</th>
				<th className="grid_item">color</th>
				<th className="grid_item">in stock</th>
				{qty === undefined ? null : (
					<th className="grid_item">price</th>
				)}
				{qty === undefined ? null : (
					<th className="grid_item">quantity</th>
				)}
			</tr>
		</thead>
	)
}

export default TableHeader
