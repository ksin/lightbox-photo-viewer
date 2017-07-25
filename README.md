# Lightbox Photo Viewer

## Prerequisites

You will need the following things properly installed on your computer.

* [npm](https://www.npmjs.com/get-npm/)
* [yarn](https://yarnpkg.com/en/) (optional)

## Installation

* git clone `ttps://github.com/ksin/lightbox-photo-viewer.git`
* `cd lightbox-photo-viewer`
* `yarn install` or `npm install` if you prefer
* Configure your secrets to use Flickr's api.  See `sample.secrets.js`

## Running / Development

* `npm start`
* Visit your app at [http://localhost:8080](http://localhost:8080).

### Building / Deploying

* `npm run build`

This command will create assets in a `dist/` folder which you can deploy as static assets anywhere (ie: to s3). The entry point of the app is `index.html`. Try `open dist/index.html` to see your build work.
