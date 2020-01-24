// geting user data from the state

import { createSelector } from 'reselect'
// A “selector” is simply a function that accepts Redux state as an argument and returns data that is derived from that state.
const selectUser = state => state.user

// using reselect to check if user value changed
/// MISTYPE

// vadinasi nepilnai suprantu sita vieta
export const slectCurrentUser = createSelector(
	// colection of input selectors
	[selectUser],
	user => user.currentUser
)

// Filter state to get array of current user items
export const selectItemsToDisplay = state => {
	// Should I use createSelector here?
	const filterObject = (obj, filter, filterValue) =>
		Object.keys(obj).reduce(
			(acc, val) =>
				obj[val][filter] === filterValue
					? {
							...acc,
							[val]: obj[val]
					  }
					: acc,
			{}
		)

	const dataToFilter = state.itms.items
	const currentUserId = state.itms.currentUser.id
	const filteredData = filterObject(
		dataToFilter.byId,
		'userId',
		currentUserId
	)

	const finalDataArray = Object.values(filteredData)

	return {
		finalDataArray
	}
}
