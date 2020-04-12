import firebase from 'firebase';
import { firebaseConfig } from './config.js';
import 'firebase/auth'

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();
export default firebase;
export const db = firebase.firestore();
export const storage= firebase.storage()