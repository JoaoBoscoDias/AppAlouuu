import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXkZbAFLTW5L-PBY3Y0k3BrDtUAFH8Bs",
  authDomain: "twitter-bosco.firebaseapp.com",
  projectId: "twitter-bosco",
  storageBucket: "twitter-bosco.appspot.com",
  messagingSenderId: "1087553621895",
  appId: "1:1087553621895:web:a31e4202a3e73af9b5cd22"
};

const uploadToFirebase = async (uri, name) => {

  const fetchResponse = await fetch(uri);

  const theBlob = await fetchResponse.blob();

 

  const imageRef = ref(getStorage(), `images/${name}`);

  const uploadTask = (uploadBytes(imageRef, theBlob));

}

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth, uploadToFirebase };