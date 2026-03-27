const firebaseConfig = {
  apiKey: "AIzaSyBQQc4eNqSXqGOJMMPzjQwOLPcVAO-NRQE",
  authDomain: "nishi-gaming-hub.firebaseapp.com",
  projectId: "nishi-gaming-hub",
  storageBucket: "nishi-gaming-hub.firebasestorage.app",
  messagingSenderId: "326151952421",
  appId: "1:326151952421:web:9e79fed644a281328f47cc"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase initialized successfully for Nishi Hub!");
