export class CreateElement {
    static createElement(tagName: string, classNames?: string | null, attributes?: object) {
        const element: HTMLElement = document.createElement(tagName);

        if (classNames) {
            element.className = classNames;
        }

        if (attributes) {
            for (const key in attributes) {
                // @ts-ignore
                element[key] = attributes[key];
            }
        }

        return element;
    }
}