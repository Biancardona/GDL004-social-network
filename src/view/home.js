import {
  addPost,
} from '../model/store.js';

export default (user) => {
  const viewPost = document.createElement('div');

  viewPost.innerHTML = `

    <button class="buttons" type="submit" id="btnClosed"><a href="#/welcome">Sign Out</a></button></br>
  <h2 class="text-center"></h2>
  <h3 class="text-center">${user.email}</h3>
 <figure class="text-center">
 <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
 </figure>


  <form id="form-addPost">
      <input name="post" type="text" id="addPost" placeholder="¿Qué te gustaría compartir hoy?"></br>
      <button type="submit" id="btn-addPost"><a href="#/home">Publicar</button></br>
      
      <div>
      <button> Galeria </button>
      <select>
          <option>Publico</option>
          <option>Privado</option>
      </select>
      </div></br>

      <div id="published">
    
      </div>
      
   </form>
  `;
  viewPost.querySelector('#btn-addPost').addEventListener('click', addPost);
  viewPost.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
  return viewPost;
};
