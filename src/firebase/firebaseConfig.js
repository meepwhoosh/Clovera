import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyA4dFg7aI5WAl8ygJuPfwkVVaGCWbxHPkM",
  authDomain: "clovera-2a956.firebaseapp.com",
  projectId: "clovera-2a956",
  storageBucket: "clovera-2a956.firebasestorage.app",
  messagingSenderId: "186636988460",
  appId: "1:186636988460:web:59aac168756f334d45e189",
  measurementId: "G-9FWKY6XGXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);

export default app;