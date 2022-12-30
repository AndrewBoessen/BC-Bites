import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDQXLwzWoN2q5TgMMB-Dx3WmIJkV65PCE',
  authDomain: 'bc-bites-7ed7b.firebaseapp.com',
  databaseURL: 'https://bc-bites-7ed7b.firebaseio.com',
  projectId: 'bc-bites-7ed7b',
  storageBucket: 'bc-bites-7ed7b.appspot.com',
  messagingSenderId: '792772788676',
  appId: '1:792772788676:ios:d42d9ed4378a0eae5ea491',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };