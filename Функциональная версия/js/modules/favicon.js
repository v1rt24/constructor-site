import { getElement } from './createElement.js';

export const createFavicon = favicon => {
  const type = favicon.substring(favicon.lastIndexOf('.') + 1);
  const typeMime =
    type === 'ico'
      ? 'image/x-icon'
      : type === 'svg'
      ? 'image/svg+xml'
      : `image/${type}`;

  const fav = getElement('link', null, {
    rel: 'shortcut icon',
    type: typeMime,
    href: favicon,
  });

  document.head.append(fav);
};