import firebase from 'firebase/app'
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

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

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
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
