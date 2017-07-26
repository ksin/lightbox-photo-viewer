# Lightbox Photo Viewer

Welcome! This repository is for a photo viewer with a lightbox. It's built with Webpack and vanilla JS. Be sure to check out the Reading Notes and Development Notes section in this README.

## Prerequisites

You will need the following things properly installed on your computer.

* [npm](https://www.npmjs.com/get-npm/)
* [yarn](https://yarnpkg.com/en/) (optional)

## Installation

* git clone `https://github.com/ksin/lightbox-photo-viewer.git`
* `cd lightbox-photo-viewer`
* `yarn install` or `npm install` if you prefer
* Configure your secrets to use Flickr's api.  See `sample.secrets.js`

## Running / Development

* `npm start`
* Visit your app at [http://localhost:8080](http://localhost:8080).

## Building / Deploying

* `npm run build`

This command will create assets in a `dist/` folder which you can deploy as static assets anywhere (ie: to s3). The entry point of the app is `index.html`. Try `open dist/index.html` to see your build work.

## Testing

* `npm test`

These are very basic [jasmine](https://jasmine.github.io/) tests run with [karma](https://github.com/webpack-contrib/karma-webpack).

## Reading Notes

The entry point for the app is `app/index.js`, which is a script added to `app/index.html` using the HtmlWebpackPlugin. Everything else is imported properly as modules and should be easy to follow from there. Feel free to reach out otherwise!

## Development Notes

Some things to note in the current code base:

* Despite my effort to keep component data independent and components light, there is a decent amount of local state in some components, mostly as a substitute for the lack of a more efficient way to repaint only the parts where data is updated. Adding in some observer patterns or templating library for a more robust view layer would help a lot.
* Event listeners, specifically on `onClick` actions, are not removed before the elements are destroyed. For modern browers, this is probably handled automatically. If we were to expand the scope of this app, I would be more concerned of memory leaks. A solution would be having an Events singleton that is imported wherever events are added and removed, so it is easier to remove any events attached to an element and its children when necessary.
* Currently, `keyup` events on the `LightboxButtons` component _are_ properly removed before destroying the element as that will certainly cause a memory leak if not removed, since it is attached directly to the document on each render.
* A data layer can be abstracted between the adapter and the `FlickrPhotoset` component, such that the response data from Flickr's API is wrapped neatly for the rest of the components to use in such a way that they don't need to be Flickr-aware (ie: there are some components that use `flickrPhotoUrl` and `dynamicFlickrPhotoUrl` that shouldn't need to. They should just be able to use something like `photo.url` or `photo.thumbnailUrl`). I withheld from adding the data layer for now since it adds complexity when all this app is doing is reading data. It would be immediately useful though as soon as we need to re-use the components elsewhere, independent of Flickr; or if we want to perform CRUD actions on the data.
* Currently, the utils are unit tested and most of the components are tested for basic rendering. More testing for user interactions and full-on integration tests is desirable. They would require extensive stubbing for action handlers and photo api data.

Most of the things left out are due to size and scope of the app. When deciding whether to keep abstracting the code or to be a little more verbose, I opted for readability. Given the small scope of the app and the lack of third party libraries, I am OK with repeating some boilerplate than expending excessive effort writing a new framework from vanilla JS.
