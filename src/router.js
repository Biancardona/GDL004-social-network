import { components } from './view/components.js';
import { currentUser } from './model/store.js';

export const changeView = (route) => {
  // console.log(router)
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '':
      return container.appendChild(components.welcome());
    case '#':
    case '#/':
    case '#/welcome': {
      container.appendChild(components.welcome());
      break;
    }
    case '#/register': {
      container.appendChild(components.register());
      break;
    }
    case '#/home': {
      const user = currentUser();
      return container.appendChild(components.home(user));
    }
    default:
      break;
  }
  console.log(route);
  return null;
};
