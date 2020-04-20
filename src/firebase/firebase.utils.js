import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUiRCf9WeRg4uXrDNA6bmxvDaN41Q6DdY",
  authDomain: "online-store-cbcea.firebaseapp.com",
  databaseURL: "https://online-store-cbcea.firebaseio.com",
  projectId: "online-store-cbcea",
  storageBucket: "online-store-cbcea.appspot.com",
  messagingSenderId: "995487212965",
  appId: "1:995487212965:web:75169cd4518f3c069bb44c"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(error => console.log(error));

export default firebase;
