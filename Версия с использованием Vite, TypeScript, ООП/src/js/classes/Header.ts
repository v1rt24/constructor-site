import {HeaderType} from '../interfaces/HeaderType';
import {CreateElement} from './CreateElement';

export class Header {
    private static header: HTMLElement = CreateElement.createElement('header');
    private static container: HTMLElement = CreateElement.createElement('div', 'container');
    private static wrapper: HTMLElement = CreateElement.createElement('div', 'header');

    static init({logo, menu, social}: HeaderType) {
        // Логотип
        if (logo) {
            const img: HTMLElement = CreateElement.createElement('img', 'logo', {
                src: logo.path,
                alt: logo.alt,
            });
            Header.wrapper.append(img);
        }

        // Меню
        if (menu) {
            const nav: HTMLElement = CreateElement.createElement('nav', 'menu-list');

            const links: HTMLElement[] = menu.map(el => {
                const link: HTMLElement = CreateElement.createElement('a', 'menu-link', {
                    href: el.href,
                    textContent: el.title,
                });

                return link;
            });

            nav.append(...links);
            Header.wrapper.append(nav);

            // Кнопка меню
            const menuButton: HTMLElement = CreateElement.createElement('button', 'menu-button');
            menuButton.addEventListener('click', () => {
                menuButton.classList.toggle('menu-button-active');
                Header.wrapper.classList.toggle('header-active');
            });

            Header.container.append(menuButton);
        }

        // Социальные сети
        if (social) {
            const socialWrapper: HTMLElement = CreateElement.createElement('div', 'social');

            const links: HTMLElement[] = social.map(el => {
                const link = CreateElement.createElement('a', 'social-link', {
                    href: el.href,
                    target: '__blank',
                });
                const img = CreateElement.createElement('img', null, {
                    src: el.path,
                    alt: el.alt,
                });

                link.append(img);
                return link;
            });

            socialWrapper.append(...links);
            Header.wrapper.append(socialWrapper);
        }

        Header.container.append(Header.wrapper);
        Header.header.append(Header.container);

        return Header.header;
    }
}