import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBB-ZpDAKpLAs-m4ghgwnnIgKRcahra4Rs",
  authDomain: "karta-cup-lima.firebaseapp.com",
  projectId: "karta-cup-lima",
  storageBucket: "karta-cup-lima.appspot.com",
  messagingSenderId: "233090377520",
  appId: "1:233090377520:web:406404d6a2e376b6f80af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
