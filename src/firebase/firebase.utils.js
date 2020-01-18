import firebase from 'firebase/app' // importing only pats that going to be used
import 'firebase/firestore' // storage
import 'firebase/auth' // authorisation

const config = {
	apiKey: 'AIzaSyCZ86kal8hbsA8aiJLwspbPdOsEBpmIyeQ',
	authDomain: 'warehouse-1bb00.firebaseapp.com',
	databaseURL: 'https://warehouse-1bb00.firebaseio.com',
	projectId: 'warehouse-1bb00',
	storageBucket: 'warehouse-1bb00.appspot.com',
	messagingSenderId: '370785182073',
	appId: '1:370785182073:web:4f13fbceafcda5a4b90fa8',
	measurementId: 'G-62X2F91SC1'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	// kokia data gaunu su userRef ar yra uid? Jo reikes saugoti data
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	// geting obj of user data from firebase
	const snapShot = await userRef.get()

	// If user is not in data base we are creating it
	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error while creating user', error.message)
		}
	}

	return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
// trigering google pop-up every time we use google auth. provider
provider.setCustomParameters({ prompt: 'select_account' })
// using only google pop-up
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
