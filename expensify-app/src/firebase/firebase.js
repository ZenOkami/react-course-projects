import { getDatabase, ref, push } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

export { app, db as default };

// onValue(ref(db),
//   (dataSnapshot) => { 
//   const val = dataSnapshot.val();
//   console.log(`${val.username} is a ${val.job.title} at ${val.job.company}. ${val.username} is ${val.age} year${val.age === 1 ? '' : 's'} old.`);
//   }, {
//     onlyOnce: false,
//   }
// );

push(ref(db, 'notes'), {
  title: 'Course Topics',
  body: 'React Native, Angular, Python'
})

push(ref(db, 'expenses'), {
  description: 'Rent',
  note: 'Rent payments',
  amount: 175000,
  createdAt: 48945680
})

// setTimeout(() => {
//   update(ref(db), {
//     age: 33,
//     'job/company': 'SumUp'
//   })
// }, 3500)

// setTimeout(() => {
//   update(ref(db), {
//     age: 31,
//     'job/company': 'Apple'
//   })
// }, 7000)

// setTimeout(() => {
//   update(ref(db), {
//     age: 30,
//     'job/company': 'Google'
//   })
// }, 10500)

// onValue(ref(db, 'expenses'),
//   (dataSnapshot) => {
//     const val = dataSnapshot.val();
//     const expenses = [];

//     dataSnapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   }, {
//     onlyOnce: true
//   });
// // set(ref(db), {
// //   username: 'Gianpi Stas',
// //   age: 29,
// //   stressLevel: 6,
// //   isEmployed: true,
// //   job: {
// //     title: 'Admissions',
// //     company: 'Naropa University'
// //   },
// //   location: {
// //     city: 'Boulder',
// //     state: 'CO',
// //     country: 'United States',
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((err) => {
// //   console.log('This failed.', err);
// // });

// // update(ref(db), {
// //   age: 30,
// //   stressLevel: 9,
// //   'job/title': 'Software Engineer',
// //   'job/company': 'Google',
// //   'location/city': 'Denver'
// // }).then(() => {
// //   console.log('Data was updated')
// // }).catch((err) => {
// //   console.log('Update failed.', err);
// // })

// // remove(ref(db, 'isEmployed')).then(() => {
// //   console.log('Successfully removed')
// // }).catch((err) => {
// //   console.log('Error in removing', err);
// // })

// // const analytics = getAnalytics();

// // const attributes = {
// //     height: `5'10"`,
// //     weight: 200
// // }

// // set(ref(db, 'attributes'), attributes).then(() => {
// //   console.log('Second set call worked')
// // }).catch((err) => {
// //   console.error('Error in second set call', err)
// // });
// // set(ref(db, 'analytics'), analytics);

// onChildAdded(ref(db, 'expenses'),
//   (dataSnapshot) => {
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });      
//     });
//     console.log(expenses);
// }, (error) => {
//   console.log("Error: ", error)
// })

// onChildRemoved(ref(db, 'expenses'), 
//   (dataSnapshot) => {
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });      
//     });
//     console.log(expenses);
// }, (error) => {
//   console.log("Error: ", error)
// })

// onChildChanged(ref(db, 'expenses'),
//   (dataSnapshot) => {
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });      
//     });
//     console.log(expenses)
// })


// // Function to update the database on Firebase using the update method
// function updateExpense(id, updates) {
//   update(ref(db, 'expenses/' + id), updates)
//     .then(() => {
//       console.log('Data was updated')
//     })
//     .catch((err) => {
//       console.log('Update failed.', err);
//     })
// }
