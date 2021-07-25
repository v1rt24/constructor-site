import {CreateElement} from '../CreateElement';
import {MainType} from '../../interfaces/MainType';
import {Slider} from './Slider';

export class Content {
    private static main: HTMLElement = CreateElement.createElement('main');
    private static container: HTMLElement = CreateElement.createElement('div', 'container');
    private static mainContent: HTMLElement = CreateElement.createElement('div', 'main-content');
    private static content: HTMLElement = CreateElement.createElement('div', 'content');

    static init({genre, rating, title, description, trailer, slider}: MainType) {
        if (genre) {
            const span = CreateElement.createElement('span', 'genre animated fadeInRight', {
                textContent: genre,
            });

            Content.content.append(span);
        }

        if (rating) {
            const ratingDiv: HTMLElement = CreateElement.createElement('div', 'rating animated fadeInRight');
            const ratingStars: HTMLElement = CreateElement.createElement('div', 'rating-stars');

            for (let i = 0; i < 10; i++) {
                const img: HTMLElement = CreateElement.createElement('img', 'star', {
                    src: i < +rating ? 'src/img/star.svg' : 'src/img/star-o.svg',
                    alt: !i ? 'Рейтинг 7 из 10' : '',
                });
                ratingStars.append(img);
            }

            const ratingNumber: HTMLElement = CreateElement.createElement('div', 'rating-number', {
                textContent: `${rating}/10`,
            });

            ratingDiv.append(ratingStars, ratingNumber);
            Content.content.append(ratingDiv);
        }

        if (title) {
            Content.content.append(CreateElement.createElement('h1', 'main-title animated fadeInRight', {
                textContent: title,
            }));
        }

        if (description) {
            Content.content.append(CreateElement.createElement('p', 'main-description animated fadeInRight', {
                textContent: description,
            }));
        }

        let youtubeButton: HTMLElement | '' = '';
        if (trailer) {
            // Кнопка слева
            Content.content.append(CreateElement.createElement('a', 'button animated fadeInRight youtube-modal', {
                href: trailer,
                textContent: 'Смотреть трейлер',
            }));

            // Кнопка справа
            const link: HTMLElement = CreateElement.createElement('a', 'play youtube-modal', {
                href: trailer,
            });
            const imgPlay: HTMLElement = CreateElement.createElement('img', 'play-img', {
                src: 'src/img/play.svg',
                alt: 'play',
            });

            link.append(imgPlay);
            youtubeButton = link;
        }

        let sliderElems: HTMLElement | '' = '';
        if (slider?.length) {
            sliderElems = Slider.init(slider);
        }

        Content.mainContent.append(Content.content, youtubeButton);
        Content.container.append(Content.mainContent, sliderElems);
        Content.main.append(Content.container);

        return Content.main;
    }
}