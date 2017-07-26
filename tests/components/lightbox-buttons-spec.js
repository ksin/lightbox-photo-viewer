import LightboxButtons from '../../app/components/lightbox-buttons.js';
const assert = require('assert');

describe('LightboxButtons', () => {
  it('should render LightboxButtons element', () => {
    const lightboxButtons = new LightboxButtons({
      index: 0,
      max: 5,
      change: () => {},
      close: () => {}
    });
    const el = lightboxButtons.render();

    assert.equal('DIV', el.tagName);
    assert.equal('lightbox-buttons', el.className);
    assert.equal(3, el.childElementCount);
  });

  it('should update LightboxButtons index', () => {
    const lightboxButtons = new LightboxButtons({
      index: 0,
      max: 16,
      change: () => {},
      close: () => {}
    });
    const el = lightboxButtons.render();

    assert.equal(0, lightboxButtons.index);
    lightboxButtons.onChange(1);
    assert.equal(1, lightboxButtons.index);
  });
});
