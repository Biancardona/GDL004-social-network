import {
  enterUser,
} from '../model/store.js';


export default () => {
  const viewWelcome = document.createElement('div');
  viewWelcome.innerHTML = `
    <form id="form-emailEnter">
      <input name="email" type="email" id="formInputEmail" placeholder="email"></br>
      <input name="password" type="password" id="formInputPassw" placeholder="password" minlength=1></br>
      <button class="buttons" type="submit" id="btn-email"><a href="#/home">Iniciar sesión</a></button></br>

      <button class="buttons btnreg" type="submit" id="register"><a href="#/register">regístrate</a></button></br></br>
    <div id=containerEmpty>
    </div>

   </form>`;

  viewWelcome.querySelector('#btn-email').addEventListener('click', enterUser);
  viewWelcome.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
  return viewWelcome;
};
