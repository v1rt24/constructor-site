export const getElement = (tagName, classNames, attributes) => {
  const element = document.createElement(tagName);

  if (classNames) {
    element.classList.add(...classNames);
  }

  if (attributes) {
    for (const key in attributes) {
      element[key] = attributes[key];
    }
  }

  return element;
};