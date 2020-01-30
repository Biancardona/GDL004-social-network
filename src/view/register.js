import {
  registerAccount,
} from '../model/store.js';

export default () => {
  const viewRegister = document.createElement('div');
  viewRegister.innerHTML = `
  <form id="form-emailRegistra">
      <input name="nombre" type="text" id="formInputName-reg" placeholder="Name"></br>
      <input name="apellido" type="text" id="formInputLastName-reg" placeholder="Last Name"></br>
      <input name="email" type="email" id="formInputEmail-reg" placeholder="Email"></br>
      <input name="password" type="password" id="formInputPassw-reg" placeholder="Password"></br>
      
      <button class="buttons" type="submit" id="btn-email-reg"><a href="#/home">Register</a></button></br>
      <button class="buttons" type="submit" id="btn-email-Welcome"><a href="#/welcome">Login</a></button></br>
   </form>`;

  viewRegister.querySelector('#btn-email-reg').addEventListener('click', registerAccount);
  viewRegister.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
  return viewRegister;
};
