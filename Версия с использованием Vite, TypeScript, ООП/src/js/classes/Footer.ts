import {FooterType} from '../interfaces/FooterType';
import {CreateElement} from './CreateElement';

export class Footer {
    private static footer: HTMLElement = CreateElement.createElement('footer', 'footer');
    private static container: HTMLElement = CreateElement.createElement('div', 'container');
    private static footerContent: HTMLElement = CreateElement.createElement('div', 'footer-content');

    static init({copyright, footerMenu}: FooterType) {
        const left: HTMLElement = CreateElement.createElement('div', 'left');
        const span: HTMLElement = CreateElement.createElement('span', 'copyright', {
            textContent: copyright,
        });

        const right: HTMLElement = CreateElement.createElement('div', 'right');
        const nav: HTMLElement = CreateElement.createElement('nav', 'footer-menu');
        const links: HTMLElement[] = footerMenu.map(el => {
            const link: HTMLElement = CreateElement.createElement('a', 'footer-link', {
                href: el.href,
                textContent: el.title,
            });

            return link;
        });

        left.append(span);
        nav.append(...links);
        right.append(nav);

        Footer.footerContent.append(left, right);
        Footer.container.append(Footer.footerContent);
        Footer.footer.append(Footer.container);

        return Footer.footer;
    }
}