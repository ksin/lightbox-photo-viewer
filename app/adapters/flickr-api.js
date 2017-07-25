import FLICKR_CONFIG from '../utils/flickr-config.js';

/*
  FlickrAPIAdapter
  ---
  Isolates request in fetchPhotos; parses and promisifies the JSON response
*/

export default class FlickrAPIAdapter {
  fetchPhotos() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', this.requestUrl(FLICKR_CONFIG), true);

      xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          const photos = JSON.parse(this.response).photoset.photo;
          resolve(photos);

        } else {
          // We reached our target server, but it returned an error
          reject(this.status);
        }
      }

      xhr.onerror = function() {
        // There was a connection error of some sort
        reject(this.status);
      }

      xhr.timeout = 10000;

      xhr.send();
    });
  }

  requestUrl(options) {
    return 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos' +
      '&api_key=' + options.api_key +
      '&photoset_id=' + options.photoset_id +
      '&user_id=' + options.user_id +
      '&format=json' +
      '&nojsoncallback=1';
  }
}
