import styles from './styles/app.css'
import FlickrPhotoset from './components/flickr-photoset.js';

/*
  Initiates app on document ready
*/

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  document.getElementById('root').appendChild(new FlickrPhotoset().render());
});
