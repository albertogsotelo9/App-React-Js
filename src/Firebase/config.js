
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfEQx1SHW-yY81CttrSSdOW0KT9Yk8g4g",
  authDomain: "react20220403.firebaseapp.com",
  projectId: "react20220403",
  storageBucket: "react20220403.appspot.com",
  messagingSenderId: "455974563120",
  appId: "1:455974563120:web:cc7c236d6ebcd5a850ecf5"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}