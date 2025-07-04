// Firebase configuration for your project
const firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyArc0CMcClGsT__fDKfAj-TuYg5zPoynhw",
  authDomain: "ngl1-a7cb4.firebaseapp.com",
  databaseURL: "https://ngl1-a7cb4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ngl1-a7cb4",
  storageBucket: "ngl1-a7cb4.firebasestorage.app",
  messagingSenderId: "262815780183",
  appId: "1:262815780183:web:ae1ee496530c83cc380212",
  measurementId: "G-HZJGR98R8M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
