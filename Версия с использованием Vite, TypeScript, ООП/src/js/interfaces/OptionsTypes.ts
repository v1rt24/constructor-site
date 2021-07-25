import {HeaderType} from './HeaderType';
import {MainType} from './MainType';
import {FooterType} from './FooterType';

export interface OptionsTypes {
    favicon?: string;
    bgColor?: string;
    title?: string;
    fontColor?: string;
    bgImg?: string;
    subColor?: string;
    header: HeaderType;
    main: MainType;
    footer: FooterType;
}