import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBdWIL417of_8s3fm6On82BUKNsSJ-XYh4',
	authDomain: 'clothing-store-react-5b88c.firebaseapp.com',
	projectId: 'clothing-store-react-5b88c',
	storageBucket: 'clothing-store-react-5b88c.appspot.com',
	messagingSenderId: '1082749741685',
	appId: '1:1082749741685:web:8596f23997a231eccd663c',
	measurementId: 'G-TRL0BSBVWV',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;

		const createdAt = new Date();
		try {
			await userRef.set({
				createdAt,
				displayName,
				email,
				...additionalData,
			});
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
