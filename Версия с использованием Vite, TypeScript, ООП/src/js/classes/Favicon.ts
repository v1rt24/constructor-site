import {CreateElement} from './CreateElement';

export class Favicon {
    static favicon(fav: string) {
        const type: string = fav.substring(fav.lastIndexOf('.') + 1);
        const typeMime: string =
            type === 'ico'
                ? 'image/x-icon'
                : type === 'svg'
                ? 'image/svg+xml'
                : `image/${type}`;

        const fvn: HTMLElement = CreateElement.createElement('link', '', {
            rel: 'shortcut icon',
            type: typeMime,
            href: fav,
        });

        document.head.append(fvn);
    }
}