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
  constructor(photos) {
    this.photos = photos;
  }

  render() {
    const el = createElement('div', { className: 'photo-grid' });

    this.photos.forEach((photo) => {
      const photoThumbnail = new PhotoThumbnail(photo, (photo) => {
        el.appendChild(new Lightbox(photo, this.photos).render());
      });

      el.appendChild(photoThumbnail.render());
    });
    return el;
  }
}

