import React from 'react'

const Span = ({ number, id, onClick, value }) => {
	return (
		<span onClick={onClick} value={value} id={id} key={id}>
			{number}
		</span>
	)
}

export default Span
