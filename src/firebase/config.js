import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDfDIkGm6IYBhOc4G5VMZTtXAAdggw5nYA",
    authDomain: "olx-page-621a2.firebaseapp.com",
    projectId: "olx-page-621a2",
    storageBucket: "olx-page-621a2.appspot.com",
    messagingSenderId: "279250723054",
    appId: "1:279250723054:web:3d3d47c19409e976af53ff",
    measurementId: "G-LTJ9F0H194"
  };

 export default firebase.initializeApp(firebaseConfig)