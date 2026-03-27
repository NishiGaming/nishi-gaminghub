// 1. Naya Firebase Config (v2 project)
const firebaseConfig = {
  apiKey: "AIzaSyAfXJhGkQIz_ww420JHY5uuXS3mR1vnvHQ",
  authDomain: "nishi-gaming-and-earning-v2.firebaseapp.com",
  projectId: "nishi-gaming-and-earning-v2",
  storageBucket: "nishi-gaming-and-earning-v2.firebasestorage.app",
  messagingSenderId: "925224913605",
  appId: "1:925224913605:web:769e1d2a63b4fcd82c3eac"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// 2. FLAG SETUP
const input = document.querySelector("#phone_input");
const iti = window.intlTelInput(input, {
    initialCountry: "in", 
    separateDialCode: true, 
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// 3. Recaptcha Setup
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible'
});

// 4. Send OTP Function
window.sendOTP = function() {
    const phoneNumber = iti.getNumber(); 
    const appVerifier = window.recaptchaVerifier;

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP Bhej diya gaya hai!");
        }).catch((error) => {
            console.error("Error:", error);
            // Agar billing ka error aaye toh alert mein dikhega
            alert("Galti: " + error.message);
        });
}
