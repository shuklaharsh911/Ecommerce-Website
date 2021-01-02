import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAGWl8JRWQwebCsFbPnCk4KnMCCDcd0Q0g",
    authDomain: "ecommerce-f84b7.firebaseapp.com",
    databaseURL: "https://ecommerce-f84b7.firebaseio.com",
    projectId: "ecommerce-f84b7",
    storageBucket: "ecommerce-f84b7.appspot.com",
    messagingSenderId: "43145226277",
    appId: "1:43145226277:web:43b279fc07144cdd94f7cc",
    measurementId: "G-KNQ2MWNS02"
  });
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    }
     catch (error) {
        console.error("Error creating user document", error);
      }
    };;
    return getUserDocument(user.uid)
  };
  const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
}
