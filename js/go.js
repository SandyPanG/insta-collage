var config = {
    apiKey: "AIzaSyC8w811rB-mDJ8GAZU5Vo4uWiTIrpwAFUM",
    authDomain: "insta-collage-d975d.firebaseapp.com",
    databaseURL: "https://insta-collage-d975d.firebaseio.com",
    projectId: "insta-collage-d975d",
    storageBucket: "",
    messagingSenderId: "559342495733"
  };
  firebase.initializeApp(config);

//   get elements

const txtEmail = document.getElementById('textEmail');
const txtPassword = document.getElementById('textPassword');
const popPassword = document.getElementById('password-popover');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');
const popEmail = document.getElementById('email-popover');
const validateEmail = false;
const validatePassword = false;

// direccionar login
btnLogin.addEventListener('click', function(event) {
    console.log('click');
    event.preventDefault();
    window.location.href = 'index.html';
  });

// activar btnLogin
  function activeBtnLogin() {
    if (validateEmail && validatePassword) {
      loginBtn.removeAttribute('disabled');
    }
  }

// logIn inactivo
  function inactiveBtnLogin() {
    btnLogin.hasAttribute('disabled', true);
  }

//  validando correo 
  textEmail.addEventListener('input', function() {
    var regexEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(regexEmail.test(txtEmail.value));
    if (regexEmail.test(txtEmail.value)) {
      validateEmail = true;
      activeLoginBtn();
      popEmail.classList.add('d-none');
    } else {
      inactiveLoginBtn();
      popEmail.classList.remove('d-none');
    }
  });

// pass
txtPassword.addEventListener('input', function() {
    var regexPassword = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\0-9]{6,}$/;
    console.log(regexPassword.test(txtPassword.value));
    if (regexPassword.test(Password.value)) {
      validatePassword = true;
      activeLBtnLogin();
      popPassword.classList.add('d-none');
    } else {
      popPassword.classList.remove('d-none');
    }
  });

// add login event
btnLogin.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
}); 

// add sigup event
btnSignUp.addEventListener('click', e => {
     // get email and pass
     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     const promise = auth.creaUserWithEmailAndPassword(email, pass);
     promise.catch(e => console.log(e.message));
    //  .then(user => console.log(user));
     
     
});

// add a real time listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('no registrado');        
    }
});

  
