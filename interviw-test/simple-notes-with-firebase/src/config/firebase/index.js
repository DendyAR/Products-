import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAcfD09lcnmG3jJ12gpqFmozrQx7Zei0NY",
    authDomain: "simplenotefirebase-c9dfb.firebaseapp.com",
    projectId: "simplenotefirebase-c9dfb",
    storageBucket: "simplenotefirebase-c9dfb.appspot.com",
    messagingSenderId: "571174177495",
    appId: "1:571174177495:web:00a2399b6005bc60577e92",
    measurementId: "G-RVWCCPN1WC",
    databaseURL: "https://simplenotefirebase-c9dfb-default-rtdb.asia-southeast1.firebasedatabase.app/" ,
  };
  
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const database = getDatabase();

    export default app;