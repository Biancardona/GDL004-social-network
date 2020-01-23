import { buildElement } from './creates.js';
import {
  registerAccount,
} from '../model/store.js';

export default () => {
  const viewRegister = document.createElement('div');
  viewRegister.innerHTML = `
  <form id="form-emailRegistra">
      <input name="email" type="email" id="formInputEmail-reg" placeholder="email"></br>
      <input name="password" type="password" id="formInputPassw-reg" placeholder="password"></br>
      <input name="password" type="password" id="formInputPassw-confirm" placeholder="confirm password"></br>
      
      <button type="submit" id="btn-email-reg"><a href="#/home">Registrar</a></button></br>
      <button type="submit" id="btn-email-Welcome"><a href="#/welcome">Iniciar sesión</a></button></br>
   </form>`;

  const btn = viewRegister.querySelector('#btn-email-reg');
  btn.addEventListener('click', registerAccount);

  // document.getElementById('contentHome').appendChild(viewRegister);
  return viewRegister;
};
/*
 // Formulario de registro
 const viewRegistrar = document.getElementById('form-create');
 viewRegistrar.appendChild(buildElement('FORM', '', '', 'form-register-email'));
 viewRegistrar.appendChild(buildElement('INPUT', '', 'email', 'form-register-email'));
 viewRegistrar.appendChild(buildElement('INPUT', '', 'password', 'form-register-email'));
 viewRegistrar.appendChild(buildElement('BUTTON', 'Registrar', '', 'form-register-email')); // iniciar sesion te envia al home, muestra todo tu perfil

   const divElem = document.createElement('div');
   divElem.innerHTML = viewRegistrar;

   return divElem;
  }
   */
