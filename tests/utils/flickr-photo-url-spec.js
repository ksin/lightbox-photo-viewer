import { flickrPhotoUrl, dynamicFlickrPhotoUrl } from '../../app/utils/flickr-photo-url.js';
const assert = require('assert');

describe('flickrPhotoUrl', () => {
  it('should return a url for a photo', () => {
    const photo = { farm: 'strauss', server: 's3', id: '123', secret: 'hehe' };
    const url = flickrPhotoUrl(photo, 'n');

    assert.equal(url, 'https://farmstrauss.staticflickr.com/s3/123_hehe_n.jpg');
  });
});

describe('dynamicFlickrPhotoUrl', () => {
  it('should return a url with z suffix for a photo for width < 640', () => {
    const photo = { farm: 'strauss', server: 's3', id: '345', secret: 'haha' };
    const url = dynamicFlickrPhotoUrl(photo, 620);

    assert.equal(url, 'https://farmstrauss.staticflickr.com/s3/345_haha_z.jpg');
  });

  it('should return a url with b suffix for a photo for width <>640', () => {
    const photo = { farm: 'strauss', server: 's3', id: '345', secret: 'haha' };
    const url = dynamicFlickrPhotoUrl(photo, 650);

    assert.equal(url, 'https://farmstrauss.staticflickr.com/s3/345_haha_b.jpg');
  });
});
