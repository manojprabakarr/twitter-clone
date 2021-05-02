import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAZf9MxW3IBI1SyQAYpNopcBZeqgTqANXQ",
    authDomain: "twitter-clone-cba88.firebaseapp.com",
    projectId: "twitter-clone-cba88",
    storageBucket: "twitter-clone-cba88.appspot.com",
    messagingSenderId: "683225887072",
    appId: "1:683225887072:web:b73a3828bb649622a0ae05",
    measurementId: "G-PR88WN6D16"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebaseapp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export default db;
  export {auth,provider};