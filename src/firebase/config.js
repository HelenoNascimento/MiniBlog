
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCtXiIxGJ2iR_q1dOtjIuoteB2SayjFr3U",
  authDomain: "mini-blog-65f4e.firebaseapp.com",
  projectId: "mini-blog-65f4e",
  storageBucket: "mini-blog-65f4e.appspot.com",
  messagingSenderId: "558170018214",
  appId: "1:558170018214:web:a393679ff91c3bb7ffff67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db} 