import FlickrAPIAdapter from '../adapters/flickr-api.js';
import PhotoGrid from './photo-grid.js';
import { createElement } from '../utils/dom-helpers.js';

/*
  FlickrPhotoset
  ---
  Initiates the app by fetching photos via the FlickrAPIAdapter and then building the PhotoGrid with response data
*/

export default class FlickrPhotoset {
  render() {
    const el = createElement('div', { className: 'flickr-photoset' });
    const header = createElement('h1', { className: 'header', text: 'Los Angeles Arboretum' });
    const loadingMessage = createElement('h2', { className: 'loading', text: 'Loading photos. Any second now...' });

    el.appendChild(header);
    el.appendChild(loadingMessage);

    new FlickrAPIAdapter().fetchPhotos()
      .then((photos) => {
        el.appendChild(new PhotoGrid({ photos }).render());
      })
      .catch((error) => {
        el.appendChild(createElement('h2', { className: 'error', text: `Status: ${error} - There was an error getting the photos :(`}));
      })
      .then(() => {
        loadingMessage.remove();
      });

    return el;
  }
}
