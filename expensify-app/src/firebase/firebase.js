import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import { getDatabase, ref, set, update, remove } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDit10MdQpgwSsMuR083Ks0ofxnrF01_Es",
  authDomain: "expensify-2871d.firebaseapp.com",
  databaseURL: "https://expensify-2871d-default-rtdb.firebaseio.com",
  projectId: "expensify-2871d",
  storageBucket: "expensify-2871d.appspot.com",
  messagingSenderId: "331637275884",
  appId: "1:331637275884:web:bcdb7e8cc38e13aa7cb9c9",
  measurementId: "G-23QTLDB0HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
set(ref(db), {
  username: 'Gianpi Stas',
  age: 29,
  isEmployed: true,
  location: {
    city: 'Boulder',
    state: 'CO',
    country: 'United States',
  }
}).then(() => {
  console.log('Data is saved');
}).catch((err) => {
  console.log('This failed.', err);
});

// set(ref(db), 'This is my data')
update(ref(db), {
  age: 30,
  'location/city': 'Denver'
}).then(() => {
  console.log('Data was updated')
}).catch((err) => {
  console.log('Update failed.', err);
})

remove(ref(db, 'isEmployed')).then(() => {
  console.log('Successfully removed')
}).catch((err) => {
  console.log('Error in removing', err);
})

const analytics = getAnalytics();

const attributes = {
    height: `5'10"`,
    weight: 200
}

set(ref(db, 'attributes'), attributes).then(() => {
  console.log('Second set call worked')
}).catch((err) => {
  console.error('Error in second set call', err)
});
set(ref(db, 'analytics'), analytics);