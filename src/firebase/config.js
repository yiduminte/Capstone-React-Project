import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSbsL_Fyzlh2aZemY3wa5BaXXiBSagbWM",
  authDomain: "yidu-s-cooking-recipe-site.firebaseapp.com",
  projectId: "yidu-s-cooking-recipe-site",
  storageBucket: "yidu-s-cooking-recipe-site.appspot.com",
  messagingSenderId: "228593358486",
  appId: "1:228593358486:web:3e4bfa4694eae21fa0d4b7",
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
