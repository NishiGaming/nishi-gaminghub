// 1. Tera Firebase Config
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

// 2. FLAG SETUP (Isse Flag dikhega)
const input = document.querySelector("#phone_input");
const iti = window.intlTelInput(input, {
    initialCountry: "in", // India default
    separateDialCode: true, // Flag ke sath +91 alag dikhega
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// 3. Recaptcha (OTP ke liye zaroori)
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible'
});

// 4. Send OTP Function
window.sendOTP = function() {
    const phoneNumber = iti.getNumber(); // Ye apne aap +91 jod dega
    const appVerifier = window.recaptchaVerifier;

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP Bhej diya gaya hai!");
        }).catch((error) => {
            console.error("Error:", error);
            alert("Galti: " + error.message);
        });
}
