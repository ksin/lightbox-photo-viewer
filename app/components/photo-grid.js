import PhotoThumbnail from './photo-thumbnail.js';
import Lightbox from './lightbox.js';
import { createElement } from '../utils/dom-helpers.js';

/*
  PhotoGrid
  ---
  Renders the grid of photo thumbnails with photos data.
  Each PhotoThumbnail receives its photo and an action handler for rendering the Lightbox onClick.
*/

export default class PhotoGrid {
  constructor({ photos }) {
    this.photos = photos;
  }

  render() {
    const el = createElement('div', { className: 'photo-grid' });
    const photos = this.photos;

    photos.forEach((photo) => {
      const onClick = (photo) => {
        el.appendChild(new Lightbox({ photo, photos }).render());
      }
      const photoThumbnail = new PhotoThumbnail({ photo, onClick });

      el.appendChild(photoThumbnail.render());
    });
    return el;
  }
}

