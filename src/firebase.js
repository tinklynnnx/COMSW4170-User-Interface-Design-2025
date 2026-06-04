import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - Using existing cUNIected app project
// The project already has the 'events' collection set up (as shown in the screenshot)
// TODO: Replace with your actual Firebase config from Firebase Console > Project Settings
const firebaseConfig = {
  apiKey: "AIzaSyCkZxqbvHEJbFF87RENMcNgRiXAK_9x0i4",
  authDomain: "cuniected-app.firebaseapp.com",
  projectId: "cuniected-app",
  storageBucket: "cuniected-app.firebasestorage.app",
  messagingSenderId: "204862811576",
  appId: "1:204862811576:web:43a9d864096e6a56c3f34d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

