// createElement and createImg are functions that return their respective native DOM elements.
// They provide no new API and are used simply for brevity.

export function createElement(element, { className, text, onClick }) {
  const el = document.createElement(element);

  if (className) { el.className = className; }
  if (text) {
    el.appendChild(document.createTextNode(text));
  }
  if (onClick) {
    el.addEventListener('click', onClick , false);
  }
  return el;
}

export function createImg({ src, alt, className, onClick }) {
  const img = createElement('img', { className, onClick });

  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  return img;
}

// mutable elements wrap native DOM elements with a set and render function.
// Use #render to return the element. Use #set to update its values.

export class MutableTextElement {
  constructor(type, options) {
    this.el = createElement(type, options);
  }

  render() {
    return this.el;
  }

  set(text) {
    this.el.textContent = text;
  }
}

export class MutableImgElement {
  constructor({ src, alt, className }) {
    this.el = createImg({ src, alt, className });
  }

  render() {
    return this.el;
  }

  set(src, alt) {
    this.el.setAttribute('src', src);
    this.el.setAttribute('alt', alt);
  }
}
