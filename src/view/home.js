import {
  addPost,
} from '../model/store.js';

export default (user) => {
  const viewPost = document.createElement('div');

  viewPost.innerHTML = `

  <button class="buttons" type="submit" id="btnClosed"><a href="#/welcome">Sign Out</a></button></br>
  <h2 class="text-center">Welcome</h2>
  <h3 class="text-user">${user.email}</h3>
 <figure class="text-center">
 <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
 </figure>


  <form id="form-addPost" method ="post" name="fileinfo">
      <input name="post" type="text" id="addPost" placeholder="¿What´s on your mind?"></br>
      <button type="submit" id="btn-addPost"><a href="#/home">Create Post</button></br>
      
      <div>
      <button> Galery </button>
      <select>
          <option>Public</option>
          <option>Private</option>
      </select>
      </div></br>

      <div id="published">
    <h2> </h2>
      </div>
      
   </form>
  `;
  viewPost.querySelector('#btn-addPost').addEventListener('click', addPost);
  viewPost.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
  return viewPost;
};
