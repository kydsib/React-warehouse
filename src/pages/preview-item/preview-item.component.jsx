import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './preview-item.styles.scss'

import { toggleItemActive, deleteItem } from '../../redux/item/item.actions'
import TableHeader from '../../components/table-header/table-header.component'
import SingleItem from '../../components/single-item/single-item.component'
import PreviewNav from '../../components/preview-nav/preview-nav.component'

const ItemDetail = ({ match }) => {
	const itemId = match.params.id
	const itemToPreview = useSelector(state => state.itms.items.byId[itemId])

	const dispatch = useDispatch()

	return (
		<div>
			<div className="nav">
				<PreviewNav id={itemToPreview.id} />
			</div>
			<table>
				<TableHeader
					qty={itemToPreview.quantity}
					className={`${itemToPreview.quantity ? 'eight' : ''}`}
				/>
				<tbody>
					<SingleItem
						className={`product ${
							itemToPreview.quantity > 0 ? '' : 'empty-stock'
						} ${itemToPreview.quantity ? 'eight' : ''}`}
						// second ternary is for aditional class in preview tab // looks too hacky, find a simpler solution
						key={itemToPreview.id}
						id={itemToPreview.id}
						name={itemToPreview.name}
						ean={itemToPreview.ean}
						type={itemToPreview.type}
						weight={itemToPreview.weight}
						color={itemToPreview.color}
						quantity={itemToPreview.quantity}
						price={itemToPreview.price}
						active={itemToPreview.active}
						onClick={() =>
							dispatch(toggleItemActive(itemToPreview.id))
						}
						deleteItem={() =>
							dispatch(deleteItem(itemToPreview.id))
						}
					/>
				</tbody>
			</table>
		</div>
	)
}

export default ItemDetail
