import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDdHxjanGNg7pG0r2DgjSDrPC6F5Dm5OvU",
  authDomain: "quizify-b518a.firebaseapp.com",
  databaseURL: "https://quizify-b518a-default-rtdb.firebaseio.com",
  projectId: "quizify-b518a",
  storageBucket: "quizify-b518a.appspot.com",
  messagingSenderId: "806872392529",
  appId: "1:806872392529:web:c97909eb831676ad876970"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.auth()

export default firebase
