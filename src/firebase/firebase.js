import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAn0Q8q7YSv8Oi4OkbRY7sEz0HayGN4wfk",
  authDomain: "rakuraku-react.firebaseapp.com",
  projectId: "rakuraku-react",
  storageBucket: "rakuraku-react.appspot.com",
  messagingSenderId: "785600496904",
  appId: "1:785600496904:web:041606a55648e46162d8bd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providerGoogle = new firebase.auth.GoogleAuthProvider();

export default firebase