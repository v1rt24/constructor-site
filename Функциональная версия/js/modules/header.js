import { getElement } from './createElement.js';

// Создание шапки
export const createHeader = ({logo, menu, social}) => {
  const header = getElement('header');
  const container = getElement('div', ['container']);
  const wrapper = getElement('div', ['header']);

  // Логотип
  if (logo) {
    const logotype = getElement('img', ['logo'], {
      src: logo.path,
      alt: logo.alt || '',
    });
    wrapper.append(logotype);
  }

  // Меню
  if (menu) {
    const nav = getElement('nav', ['menu-list']);

    const links = menu.map(el => {
      const link = getElement('a', ['menu-link'], {
        href: el.href,
        textContent: el.title,
      });

      return link;
    });

    nav.append(...links);
    wrapper.append(nav);

    // Кнопка меню
    const menuButton = getElement('button', ['menu-button']);
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('menu-button-active');
      wrapper.classList.toggle('header-active');
    });

    container.append(menuButton);
  }

  // Социальные сети
  if (social) {
    const socialElem = getElement('div', ['social']);

    let socialAll = social.map(el => {
      const link = getElement('a', ['social-link'], {
        href: el.href,
        target: '_blank',
      });

      const img = getElement('img', [], {
        src: el.path,
        alt: el.alt || '',
      });

      link.append(img);
      return link;
    });

    socialElem.append(...socialAll);
    wrapper.append(socialElem);
  }

  header.append(container);
  container.append(wrapper);

  return header;
};