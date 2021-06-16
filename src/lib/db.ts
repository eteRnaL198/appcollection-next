import firebase from 'firebase'
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDvSR970rhBkEDVnLF3zV9ILmNMNzL5Lz4",
//   authDomain: "appcollection-f9fae.firebaseapp.com",
//   projectId: "appcollection-f9fae",
//   storageBucket: "appcollection-f9fae.appspot.com",
//   messagingSenderId: "731448280403",
//   appId: "1:731448280403:web:7b07c37cccf5790bbe0da6",
//   measurementId: "G-4SR59JR8MN"
// };

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();