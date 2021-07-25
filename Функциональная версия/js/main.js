import { createFavicon } from './modules/favicon.js';
import { createHeader } from './modules/header.js';
import { createMain } from './modules/createMain.js';
import { swiper } from './modules/swipper.js';

const movieConstructor = (selector, options) => {
  const app = document.querySelector(selector);

  // favicon
  if (options.favicon) {
    createFavicon(options.favicon);
  }

  // Обёртка всего сайта
  app.classList.add('body-app');

  // Цвет фона сайта
  app.style.backgroundColor = options.bgColor || '#141218';

  // Цвет шрифта
  app.style.color = options.fontColor || '#FFFFFF';

  // Изображение фона сайта
  app.style.backgroundImage = options.bgImg ? `url(${options.bgImg})` : '';

  // Второстепе́нный цвет
  document.documentElement.style.setProperty('--sub-color', options.subColor || 'red');

  // title
  document.title = options.title || 'Сайт';

  // Шапка сайта
  if (options.header) {
    app.append(createHeader(options.header));
  }

  // Контент сайта
  if (options.main) {
    app.append(createMain(options.main, options.slider));
    swiper();
  }
};

movieConstructor('.app', {
  favicon: 'witcher/background.jpg',
  title: 'Ведьмак',
  bgColor: '#141218',
  bgImg: 'witcher/background.jpg',
  fontColor: '#FFFFFF',
  subColor: '#9D2929',
  header: {
    logo: {
      path: 'witcher/logo.png',
      alt: 'логотип Ведьмак',
    },
    menu: [
      {
        href: '#',
        title: 'Описание',
      },
      {
        href: '#',
        title: 'Трейлер',
      },
      {
        href: '#',
        title: 'Отзывы',
      },
    ],
    social: [
      {
        href: '#',
        path: 'witcher/social/twitter.svg',
        alt: 'Twitter',
      },
      {
        href: '#',
        path: 'witcher/social/instagram.svg',
        alt: 'instagram',
      },
      {
        href: '#',
        path: 'witcher/social/facebook.svg',
        alt: 'Facebook',
      },
    ],
  },
  main: {
    genre: '2019,фэнтези',
    rating: '8',
    title: 'Ведьмак',
    description: `
      Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по
      Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ
      болотных, оборотней и даже заколдованных принцесс.
    `,
    trailer: 'https://www.youtube.com/watch?v=P0oJqfLzZzQ',
  },
  slider: [
    {
      src: 'witcher/series/series-1.jpg',
      subtitle: 'Серия №1',
      title: 'Начало конца',
    },
    {
      src: 'witcher/series/series-2.jpg',
      subtitle: 'Серия №2',
      title: 'Четыре марки',
    },
    {
      src: 'witcher/series/series-3.jpg',
      subtitle: 'Серия №3',
      title: 'Предательская луна',
    },
    {
      src: 'witcher/series/series-4.jpg',
      subtitle: 'Серия №4',
      title: 'Банкеты, ублюдки и похороны',
    },
  ],
});