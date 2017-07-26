import PhotoGrid from '../../app/components/photo-grid.js';
const assert = require('assert');

describe('PhotoGrid', () => {
  it('should render PhotoGrid element', () => {
    const photos = [
      { title: 'Img1' },
      { title: 'Img2' },
      { title: 'Img3' },
      { title: 'Img4' },
    ];
    const photoGrid = new PhotoGrid(photos);
    const el = photoGrid.render();

    assert.equal('DIV', el.tagName);
    assert.equal('photo-grid', el.className);
    assert.equal(4, el.childElementCount);
  });
});
