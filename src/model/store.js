import { validateEmail } from '../controller/authHandler.js';

// Crear nueva cuenta de correo

/* export function registerAccount(event) {
  const email = document.querySelector('#formInputEmail-reg').value;
  const emailValidationResult = validateEmail(email);
  const password = document.querySelector('#formInputPassw-reg').value;
  console.log(emailValidationResult);
  if (emailValidationResult === true) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      window.location.hash = '#/register';
      event.preventDefault();
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
    event.preventDefault();
    alert('Please enter a valid email');
  }
}
*/
export function registerAccount(event) {
  const email = document.querySelector('#formInputEmail-reg').value;
  const emailValidationResult = validateEmail(email);
  const password = document.querySelector('#formInputPassw-reg').value;
  console.log(emailValidationResult);
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() {
  if (emailValidationResult === true) {
    .catch(error) => {
      // Handle Errors here.
      window.location.hash = '#/register';
      event.preventDefault();
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
    event.preventDefault();
    alert('Please enter a valid email');
  }
}


// Iniciar sesión
export function enterUser(event) {
  const email = document.querySelector('#formInputEmail').required;
  const emailValidationResult = validateEmail(email.value);
  if (emailValidationResult === false) {
    window.location.hash = '#/welcome';
    // let empty = document.querySelector('#containerEmpty');
    alert('Please enter an email');
  }
  const password = document.querySelector('#formInputPassw').required;
  if (password === false) {
    window.location.hash = '#/welcome';
    alert('Please enter the password');
    event.preventDefault();
  }
  console.log(emailValidationResult);
  console.log('funciona model/store ENTER');
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
    })
    .catch((error) => {
      console.log(error);
    });
}

// ***********************INICIAR SESIÓN CON FACEBOOK Y GOOGLE**************************************
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


// **************************** ADD POST FIRESTORE *********************************
export const addPost = (newPost, name) => {
  console.log('funciona desde model/store ADDPOST');

  return db.collection('posts').add({
    descripcion: newPost,
    first: name,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const downPost = () => db.collection('posts').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
