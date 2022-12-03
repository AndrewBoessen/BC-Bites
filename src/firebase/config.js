
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCkNC9ldtmUarQy4mauCANvX_rkKUIsKjk',
  authDomain: "bc-bites.firebaseapp.com",
  projectId: "bc-bites",
  storageBucket: "bc-bites.appspot.com",
  messagingSenderId: "407510691112",
  appId: '1:407510691112:ios:ba2a4c26176dd238c7b41d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };