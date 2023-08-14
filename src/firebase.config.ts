import { getAnalytics, isSupported } from 'firebase/analytics';
import { getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDikjFGOUpbnFrVGV4jATd7bZuWncFK61E',
  authDomain: 'denisklym-soft.firebaseapp.com',
  projectId: 'denisklym-soft',
  storageBucket: 'denisklym-soft.appspot.com',
  messagingSenderId: '560152331876',
  appId: '1:560152331876:web:605544733c1968dc600171',
  measurementId: 'G-ZWKVRRM6QC',
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);

  (async () => {
    const supported = await isSupported();

    if (supported) {
      getAnalytics(app);
    }
  })();
}
