import { createElement } from '../utils/dom-helpers.js';
import KEY_CODES from '../utils/key-codes';

/*
  LightboxButtons
  ---
  Renders action buttons that go with the lightbox.
  Updates prev and next button disabled based on index of passed.
*/

export default class LightboxButtons {
  constructor({ index, max, change, close }) {
    this.index = index;
    this.max = max;
    this.change = change;
    this.close = close;
  }

  render() {
    const el = createElement('div', { className: 'lightbox-buttons' });

    this.prevButton = this.createLightboxButton('⟨', () => { this.onChange(this.index - 1); });
    this.nextButton = this.createLightboxButton('⟩', () => { this.onChange(this.index + 1); });
    const closeButton = this.createLightboxButton('×', () => { this.close(); });

    el.appendChild(this.prevButton);
    el.appendChild(this.nextButton);
    el.appendChild(closeButton);

    this.setupKeyboardEvents();
    this.update();

    return el;
  }

  createLightboxButton(text, onClick) {
    return createElement('button', { text, onClick, className: 'lightbox-button' });
  }

  onChange(index) {
    this.index = index;
    this.update();
    this.change(index);
  }

  update() {
    this.prevButton.disabled = this.index === 0;
    this.nextButton.disabled = this.index === this.max -1;
  }

  setupKeyboardEvents() {
    this.keyupEvent = (e) => {
      switch(e.keyCode) {
        case KEY_CODES.left_arrow:
          if (this.index === 0) { return; }
          this.onChange(this.index - 1);
          break;
        case KEY_CODES.right_arrow:
          if (this.index === this.max - 1) { return; }
          this.onChange(this.index + 1);
          break;
        case KEY_CODES.escape:
          this.close();
          break;
      }
    }

    document.addEventListener('keyup', this.keyupEvent);
  }

  removeEventsListeners() {
    document.removeEventListener('keyup', this.keyupEvent);
  }
}
