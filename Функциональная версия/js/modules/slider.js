import { getElement } from './createElement.js';

export const slider = sliders => {
  const series = getElement('div', ['series']);
  const swiperContainer = getElement('div', ['swiper-container']);
  const swiperWrapper = getElement('div', ['swiper-wrapper']);
  const arrow = getElement('button', ['arrow']);

  const cards = sliders.map(el => {
    const swiperSlide = getElement('div', ['swiper-slide']);
    const figure = getElement('figure', ['card']);

    const img = getElement('img', ['card-img'], {
      src: el.src,
      alt: el.subtitle || el.title || '',
    });

    let figcaption = '';
    if (el.subtitle || el.title) {
      figcaption = getElement('figcaption', ['card-description']);
      figcaption.insertAdjacentHTML('beforeend', `
        ${el.subtitle ? `<p class="card-subtitle">${el.subtitle}</p>` : ''}
        ${el.title ? `<p class="card-title">${el.title}</p>` : ''}
      `);
    }

    figure.append(img, figcaption);
    swiperSlide.append(figure);

    return swiperSlide;
  });

  swiperWrapper.append(...cards);
  swiperContainer.append(swiperWrapper);
  series.append(swiperContainer, arrow);

  return series;
};