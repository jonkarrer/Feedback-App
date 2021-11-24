import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJPjiLmAZEkviy-IICSuhevRejzaeei04",
  authDomain: "feedback-app-2baaa.firebaseapp.com",
  projectId: "feedback-app-2baaa",
  databaseURL: "https://feedback-app-2baaa-default-rtdb.firebaseio.com/",
  storageBucket: "feedback-app-2baaa.appspot.com",
  messagingSenderId: "305062200222",
  appId: "1:305062200222:web:01f9fff00b767229610c8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;
