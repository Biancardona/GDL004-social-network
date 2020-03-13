import {
  validateEmail,
} from '../controller/authHandler.js';

export const model = {};

// Crear nueva cuenta de correo
export function registerAccount(event) {
  event.preventDefault();
  const email = document.querySelector('#formInputEmail-reg').value;
  const emailValidationResult = validateEmail(email);
  const password = document.querySelector('#formInputPassw-reg').value;
  const name = document.querySelector('#formInputName-reg').value;
  console.log(emailValidationResult);

  if (emailValidationResult === true) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {
        window.location.hash = '#/home';
      })
      .catch((error) => {
        // Handle Errors here.
        window.location.hash = '#/register';
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  } else {
    window.location.hash = '#/register';
    alert('Please enter a valid email');
  }
}
// Iniciar sesión
export function enterUser(event) {
  event.preventDefault();
  const email = document.querySelector('#formInputEmail').value;
  const emailValidationResult = validateEmail(email);
  const password = document.querySelector('#formInputPassw').value;
  console.log(emailValidationResult);

  if (emailValidationResult === true) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        // Handle Errors here.
        window.location.hash = '#/welcome';
        const errorCode = error.code;
        const errorMessage = error.message;
        if (emailValidationResult === false) {
          window.location.hash = '#/welcome';
          alert('Please enter an email');
          window.location.hash = '#/welcome';
          alert('Please enter the password');
        }
        console.log('funciona model/store ENTER');
      });
  }
}

// Informacion del usuario
export function infoUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
    } else {
      console.log('no existe usuario activo');
      // User is signed out.
      // ...
    }
  });
}
// Datos del usuario
export function currentUser() {
  infoUser();
  const user = firebase.auth().currentUser;
  return user;
}

// Cerrar sesión
export function closed() {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
      window.location.hash = '#/welcome';
    })
    .catch((error) => {
      console.log(error);
    });
}

/* ***********************INICIAR SESIÓN CON FACEBOOK Y GOOGLE**************************************
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const facebookLogin = () => firebase.auth().signInWithRedirect(providerFacebook);
export const googleLogin = () => firebase.auth().signInWithRedirect(providerGoogle);

export const redirectResult = () => firebase.auth().getRedirectResult().then((result) => {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
  }
  // The signed-in user info.
  const user = result.user;
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  console.log(errorCode);
  console.log(errorMessage);
  console.log(email);
  console.log(credential);
});
*/


// ADD POST FIRESTORE
const db = firebase.firestore();

export const addPost = () => {
  console.log('funciona desde model/store ADDPOST');
  const postUser = document.querySelector('#addPost').value;
  db.collection('post').add({
    descripcion: postUser,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.querySelector('#published').innerHTML = postUser;
      document.querySelector('#addPost').value = '';
      window.location.hash = '#/home';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
