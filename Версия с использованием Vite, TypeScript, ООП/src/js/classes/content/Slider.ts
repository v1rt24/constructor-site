import {CreateElement} from '../CreateElement';

type sliderType = {
    pathImg: string,
    subtitle?: string,
    title?: string,
}

export class Slider {
    private static series: HTMLElement = CreateElement.createElement('div', 'series');
    private static swiperContainer: HTMLElement = CreateElement.createElement('div', 'swiper-container');
    private static swiperWrapper: HTMLElement = CreateElement.createElement('div', 'swiper-wrapper');
    private static arrow: HTMLElement = CreateElement.createElement('button', 'arrow');

    static init(slider: sliderType[]) {
        const sliderItems: HTMLElement[] = slider.map(el => {
            const swiperSlide: HTMLElement = CreateElement.createElement('div', 'swiper-slide');
            const figure: HTMLElement = CreateElement.createElement('figure', 'card');

            const img: HTMLElement = CreateElement.createElement('img', 'card-img', {
                src: el.pathImg,
                alt: el.subtitle || el.title || '',
            });

            let figcaption: HTMLElement | '' = '';
            if (el.subtitle || el.title) {
                figcaption = CreateElement.createElement('figcaption', 'card-description');
                figcaption.insertAdjacentHTML('beforeend', `
                    ${el.subtitle ? `<p class="card-subtitle">${el.subtitle}</p>` : ''}
                    ${el.title ? `<p class="card-title">${el.title}</p>` : ''}
                `);
            }

            figure.append(img, figcaption);
            swiperSlide.append(figure);

            return swiperSlide;
        });

        Slider.swiperWrapper.append(...sliderItems);
        Slider.swiperContainer.append(Slider.swiperWrapper);
        Slider.series.append(Slider.swiperContainer, Slider.arrow);

        return Slider.series;
    }
}