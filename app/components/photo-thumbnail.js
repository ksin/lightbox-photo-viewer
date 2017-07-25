import { createImg } from '../utils/dom-helpers.js';
import { flickrPhotoUrl } from '../utils/flickr-photo-url.js';

/*
  PhotoThumbnail
  ---
  Renders a click-able photo thumbnail.
  onClick events bubble up to the context it was passed in as.
*/

export default class PhotoThumbnail {
  constructor(photo, onClick) {
    this.photo = photo;
    this.onClick = onClick;
  }

  render() {
    return createImg({
      src: flickrPhotoUrl(this.photo, 'n'),
      alt: this.photo.title,
      className: 'photo-thumbnail',
      onClick:  () => { this.onClick(this.photo); }
    });
  }
}
