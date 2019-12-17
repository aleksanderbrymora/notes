import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAkzU0nhZD6uRCHaMfTCXkcDyexkuSRErQ",
	authDomain: "notes-d5887.firebaseapp.com",
	databaseURL: "https://notes-d5887.firebaseio.com",
	projectId: "notes-d5887",
	storageBucket: "notes-d5887.appspot.com",
	messagingSenderId: "651876624694",
	appId: "1:651876624694:web:04c501c12f1c8f524b2b97",
	measurementId: "G-DN7T1WBZHF"
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}

	// AUTHORIZATION
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = password =>
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;
