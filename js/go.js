var config = {
    apiKey: "AIzaSyC8w811rB-mDJ8GAZU5Vo4uWiTIrpwAFUM",
    authDomain: "insta-collage-d975d.firebaseapp.com",
    databaseURL: "https://insta-collage-d975d.firebaseio.com",
    projectId: "insta-collage-d975d",
    storageBucket: "",
    messagingSenderId: "559342495733"
  };
  firebase.initializeApp(config);

  const auth = firebase.auth();

  auth.signInWithEmailAndPassword(email, pass);
  auth.creaUserWithEmailAndPassword(email, pass);
  auth.onAuthStateChanged(firebaseUser => { });