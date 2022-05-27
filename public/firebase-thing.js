import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf4PtLRnAZ3mZ-ba2IN_EOBYtbLx2kDII",
  authDomain: "krub-embed-boooom.firebaseapp.com",
  databaseURL: "https://krub-embed-boooom-default-rtdb.firebaseio.com",
  projectId: "krub-embed-boooom",
  storageBucket: "krub-embed-boooom.appspot.com",
  messagingSenderId: "740697460413",
  appId: "1:740697460413:web:3bda60465c55f0ae2af1d4",
  measurementId: "G-KMKZ4ZV44T"
};

// Initialize Firebase
var played = false;
const ad = new Audio("Audioo/AA.mp3");
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app , "https://krub-embed-boooom-default-rtdb.firebaseio.com/");

function insertTheFuckingData() {
  set(ref(db, "motherFUckkeerLetMein"), {
    baba: "pop",
    momo: 1982739,
  })
  .then(() => {alert("done done")})
  .catch(() => {alert("error bro")});
}

function getMeDataNoi(num,hi) {
  onValue(ref(db, "number"),  (snapshot) => {
    const data = snapshot.val();
    if(data<=99){
    num.textContent = data;}
    else{
      num.textContent = "99+";
    }
    if(data>=2){updateN(hi);}
    // console.log(data);
    // updater(data);
  });
}

  function updateN(hi){
            hi.textContent = "persons in this area";
      
 }

// insertTheFuckingData();


// function updateBox (data_to_display) {
//   const box =document.querySelector('.Box');
//   box.textContent = data_to_display;
// }

export { getMeDataNoi };