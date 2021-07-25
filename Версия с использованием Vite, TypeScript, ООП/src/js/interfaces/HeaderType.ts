export interface HeaderType {
    logo?: {
        path: string,
        alt: string
    },
    menu?: {
        href: string,
        title: string
    }[],
    social?: {
        href: string,
        path: string,
        alt: string,
    }[]
}