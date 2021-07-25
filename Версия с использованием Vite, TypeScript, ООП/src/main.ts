import './js/staticFiles';
import {MovieConstructor} from './js/classes/movieConstructor';

new MovieConstructor('#app', {
    favicon: 'src/witcher/background.jpg',
    bgColor: '#141218',
    title: 'Ведьмак',
    fontColor: '#FFFFFF',
    bgImg: 'src/witcher/background.jpg',
    subColor: '#9D2929',
    header: {
        logo: {
            path: 'src/witcher/logo.png',
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
                path: 'src/witcher/social/twitter.svg',
                alt: 'Twitter',
            },
            {
                href: '#',
                path: 'src/witcher/social/instagram.svg',
                alt: 'instagram',
            },
            {
                href: '#',
                path: 'src/witcher/social/facebook.svg',
                alt: 'Facebook',
            },
        ],
    },
    main: {
        genre: '2019,фэнтези',
        rating: '8',
        title: 'Ведьмак',
        description: 'Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс.',
        trailer: 'https://www.youtube.com/watch?v=P0oJqfLzZzQ',
        slider: [
            {
                pathImg: 'src/witcher/series/series-1.jpg',
                subtitle: 'Серия №1',
                title: 'Начало конца',
            },
            {
                pathImg: 'src/witcher/series/series-2.jpg',
                subtitle: 'Серия №2',
                title: 'Четыре марки',
            },
            {
                pathImg: 'src/witcher/series/series-3.jpg',
                subtitle: 'Серия №3',
                title: 'Предательская луна',
            },
            {
                pathImg: 'src/witcher/series/series-4.jpg',
                subtitle: 'Серия №4',
                title: 'Банкеты, ублюдки и похороны',
            },
        ],
    },
    footer: {
        copyright: '© 2020 The Witcher. All right reserved.',
        footerMenu: [
            {
                href: '#',
                title: 'Privacy Policy',
            },
            {
                href: '#',
                title: 'Terms of Service',
            },
            {
                href: '#',
                title: 'Legal',
            },
        ],
    },
});
