import {OptionsTypes} from '../interfaces/OptionsTypes';

import {Favicon} from './Favicon';
import {Header} from '../classes/Header';
import {Content} from './content/Content';
import {swiperSlider} from '../modules/swiper';
import {Footer} from './Footer';

export class MovieConstructor {
    private app: HTMLDivElement;
    private options: OptionsTypes;

    constructor(selector: string, options: OptionsTypes) {
        this.app = document.querySelector<HTMLDivElement>(selector)!;
        // Обёртка всего сайта
        this.app.classList.add('body-app');
        // Цвет фона сайта
        this.app.style.backgroundColor = options.bgColor || '#141218';
        // title
        document.title = options.title || '';
        // Цвет шрифта
        this.app.style.color = options.fontColor || '#FFFFFF';
        // Изображение фона сайта
        this.app.style.backgroundImage = options.bgImg ? `url("${options.bgImg}")` : '';
        // Второстепе́нный цвет
        document.documentElement.style.setProperty('--sub-color', options.subColor || 'red');
        // Настройки
        this.options = options;
        // Метод инициализации приложения
        this.init();
    }

    private init(): void {
        // favicon
        if (this.options.favicon) {
            Favicon.favicon(this.options.favicon);
        }

        // Шапка сайта
        if (this.options.header) {
            this.app.append(Header.init(this.options.header));
        }

        // Контент сайта
        if (this.options.main) {
            this.app.append(Content.init(this.options.main));
            swiperSlider();
        }

        // Подвал
        if (this.options.footer) {
            this.app.append(Footer.init(this.options.footer));
        }
    }
}