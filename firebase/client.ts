import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArPgW2Aomgm_wq3yUnexD-NkwXcn-N0SU",
  authDomain: "perpwise-3e522.firebaseapp.com",
  projectId: "perpwise-3e522",
  storageBucket: "perpwise-3e522.firebasestorage.app",
  messagingSenderId: "106349578978",
  appId: "1:106349578978:web:dd19368eef5e904ac92cbb",
  measurementId: "G-H4DCV425S1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
