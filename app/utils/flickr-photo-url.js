/*
  Utils
*/

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
// suffix options: n for small, z for medium, b for large
export function flickrPhotoUrl(photo, suffix) {
  return 'https://farm' +
    photo.farm +
    '.staticflickr.com/' +
    photo.server + '/' +
    photo.id + '_' +
    photo.secret + '_' +
    suffix +
    '.jpg';
}

export function dynamicFlickrPhotoUrl(photo) {
    let photoUrl; // load medium or large photo depending on window size

    if (window.innerWidth > 640) {
      photoUrl = flickrPhotoUrl(photo, 'b');
    } else {
      photoUrl = flickrPhotoUrl(photo, 'z');
    }
    return photoUrl;
  }
