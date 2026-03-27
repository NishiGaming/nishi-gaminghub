// 1. Naya Firebase Config (Nishi gaming and earning v2)
const firebaseConfig = {
  apiKey: "AIzaSyAfXJhGkQIz_ww420JHY5uuXS3mR1vnvHQ",
  authDomain: "nishi-gaming-and-earning-v2.firebaseapp.com",
  projectId: "nishi-gaming-and-earning-v2",
  storageBucket: "nishi-gaming-and-earning-v2.firebasestorage.app",
  messagingSenderId: "925224913605",
  appId: "1:925224913605:web:769e1d2a63b4fcd82c3eac"
};

// Firebase Initialize (Puraane style mein taaki error na aaye)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// 2. FLAG SETUP (Isse India ka Flag aur +91 dikhega)
const input = document.querySelector("#phone_input");
const iti = window.intlTelInput(input, {
    initialCountry: "in", 
    separateDialCode: true, 
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// 3. Recaptcha Setup (OTP ke liye zaroori)
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
            alert("Galti: " + error.message);
        });
}
