import { createElement, MutableTextElement, MutableImgElement } from '../utils/dom-helpers.js';
import  { flickrPhotoUrl, dynamicFlickrPhotoUrl } from '../utils/flickr-photo-url.js';
import LightboxButtons from './lightbox-buttons.js';

/*
  Lightbox
  ---
  Renders the lightbox with title, photo, and action buttons (prev, next, close).
*/

export default class Lightbox {
  constructor(photo, photos) {
    this.photo = photo;
    this.photos = photos;
  }

  render() {
    const el = createElement('div', { className: 'lightbox'});

    this.title = new MutableTextElement('h2', { className: 'lightbox-title', text: this.photo.title });
    this.lightboxPhoto = new MutableImgElement({
      src: dynamicFlickrPhotoUrl(this.photo, window.innerWidth),
      alt: this.photo.title,
      className: 'lightbox-photo'
    });
    const lightboxButtons = new LightboxButtons({
      index: this.photos.indexOf(this.photo),
      max: this.photos.length,
      change: (photo) => { this.updateDisplayedPhoto(photo); },
      close: () => {
        el.className += ' fade-out';
        setTimeout(() => {
          lightboxButtons.removeEventsListeners();
          el.remove();
        }, 800);
      }
    });

    el.appendChild(this.title.render());
    el.appendChild(this.lightboxPhoto.render());
    el.appendChild(lightboxButtons.render());

    return el;
  }

  updateDisplayedPhoto(index) {
    const photo = this.photos[index];

    this.title.set(photo.title);
    this.lightboxPhoto.set(dynamicFlickrPhotoUrl(photo, window.innerWidth), photo.title);
  }
}
