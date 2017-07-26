import PhotoThumbnail from '../../app/components/photo-thumbnail.js';
const assert = require('assert');

describe('PhotoThumbnail', () => {
  it('should render PhotoThumbnail element', () => {
    const photo = { title: 'Sweet photo' };
    const photoThumbnail = new PhotoThumbnail(photo, () => {});
    const el = photoThumbnail.render();

    assert.equal('IMG', el.tagName);
    assert.equal('Sweet photo', el.getAttribute('alt'));
  });
});
