import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7Wjp_RCWsVmzoC8rZi7deVtAP6Z41izM",
    authDomain: "m-city-cece3.firebaseapp.com",
    databaseURL: "https://m-city-cece3.firebaseio.com",
    projectId: "m-city-cece3",
    storageBucket: "m-city-cece3.appspot.com",
    messagingSenderId: "663434606426",
    appId: "1:663434606426:web:24df402063021669426563",
    measurementId: "G-7K00C98ZQP"
  };

  firebase.initializeApp(firebaseConfig)

  const firebaseDB = firebase.database()

  const matches = firebaseDB.ref("matches")
  const firebasePromotions = firebaseDB.ref('promotions');


  const firebaseTeams = firebaseDB.ref('teams')

  export {
      firebase,
      matches,
      firebasePromotions,
      firebaseTeams,
      firebaseDB
  }
