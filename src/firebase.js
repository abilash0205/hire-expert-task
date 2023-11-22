import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  YOUR_API_KEY,
  YOUR_AUTH_DOMAIN,
  YOUR_PROJECT_ID,
  YOUR_STORAGE_BUCKET,
  YOUR_MESSAGING_SENDER_ID,
  YOUR_APP_ID,
} from "../config";

const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication
export const auth = getAuth(app);
