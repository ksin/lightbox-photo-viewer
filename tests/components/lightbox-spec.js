import Lightbox from '../../app/components/lightbox.js';
const assert = require('assert');

describe('Lightbox', () => {
  it('should render Lightbox element', () => {
    const photo = { title: 'some-photo.png' };
    const photos = [photo];
    const lightbox = new Lightbox(photo, photos);
    const el = lightbox.render();

    assert.equal('DIV', el.tagName);
    assert.equal('lightbox', el.className);
    assert.equal(3, el.childElementCount);
  });
});
