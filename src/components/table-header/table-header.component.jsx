import React from 'react'

const TableHeader = ({ qty }) => {
	return (
		<thead>
			<tr className={`grid ${qty ? 'eight' : ''}`}>
				<th className="grid__item">name</th>
				<th className="grid__item">ean</th>
				<th className="grid__item">type</th>
				<th className="grid__item">weight</th>
				<th className="grid__item">color</th>
				<th className="grid__item">in stock</th>
				{qty === undefined ? null : (
					<th className="grid__item">quantity</th>
				)}
				{qty === undefined ? null : (
					<th className="grid__item">price</th>
				)}
			</tr>
		</thead>
	)
}

export default TableHeader
