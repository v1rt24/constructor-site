import { getElement } from './createElement.js';
import { slider } from './slider.js';

export const createMain = (
  {genre, rating, title, description, trailer},
  sliderArr,
) => {
  const main = getElement('main');
  const container = getElement('div', ['container']);
  const wrapper = getElement('div', ['main-content']);
  const content = getElement('div', ['content']);

  if (genre) {
    const span = getElement('span', ['genre', 'animated', 'fadeInRight'], {
      textContent: genre,
    });

    content.append(span);
  }

  if (rating) {
    rating = +rating;
    const ratingElem = getElement('div', ['rating', 'animated', 'fadeInRight']);
    const ratingStars = getElement('div', ['rating-stars']);
    const ratingNumber = getElement('div', ['rating-number'], {
      textContent: `${rating}/10`,
    });

    for (let i = 0; i < 10; i++) {
      const img = getElement('img', ['star'], {
        src: i < rating ? 'img/star.svg' : 'img/star-o.svg',
        alt: i ? '' : `Рейтинг ${rating} из 10`,
      });

      ratingStars.append(img);
    }

    ratingElem.append(ratingStars, ratingNumber);
    content.append(ratingElem);
  }

  content.append(getElement('h1', ['main-title', 'animated', 'fadeInRight'], {
    textContent: title,
  }));

  if (description) {
    const desc = getElement('p',
      ['main-description', 'animated', 'fadeInRight'], {
        textContent: description,
      });

    content.append(desc);
  }

  let youtubeButton = '';
  if (trailer) {
    // Кнопка слева
    const link = getElement('a',
      ['button', 'animated', 'fadeInRight', 'youtube-modal'],
      {
        href: trailer,
        textContent: 'Смотреть трейлер',
      });

    content.append(link);

    // Кнопка справа
    const link2 = getElement('a', ['play', 'youtube-modal'], {
      href: trailer,
    });

    const imgPlay = getElement('img', ['play-img'], {
      src: 'img/play.svg',
      alt: 'Смотреть трейлер',
    });

    link2.append(imgPlay);
    youtubeButton = link2;
  }

  // Слайдер
  let sliderElems = '';
  if (sliderArr.length) {
    sliderElems = slider(sliderArr);
  }

  wrapper.append(content);
  wrapper.append(youtubeButton);
  container.append(wrapper, sliderElems);
  main.append(container);

  return main;
};