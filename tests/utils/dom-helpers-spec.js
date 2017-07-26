import { createElement, createImg, MutableTextElement, MutableImgElement } from '../../app/utils/dom-helpers.js';
const assert = require('assert');

describe('createElement', () => {
  it('should return a dom element', () => {
    const el = createElement('div', { className: 'lol', text: 'Hi!' })

    assert.equal('DIV', el.tagName);
    assert.equal('lol', el.className);
    assert.equal('Hi!', el.innerText);
  });
});

describe('createImg', () => {
  it('should return an img element', () => {
    const img = createImg({ src: 'happy-smile.jpg', alt: 'Happy smiles!' });

    assert.equal('happy-smile.jpg', img.getAttribute('src'));
    assert.equal('Happy smiles!', img.getAttribute('alt'));
  });
});

describe('MutableTextElement', () => {
  it('should return an img element', () => {
    const text = new MutableTextElement('p', { text: 'ROFL!', className: 'rofl' });
    let el = text.render();

    assert.equal('rofl', el.className);
    assert.equal('ROFL!', el.innerText);

    text.set('LMFAO!');
    el = text.render();

    assert.equal('LMFAO!', el.innerText);
  });
});

describe('MutableImgElement', () => {
  it('should return an img element', () => {
    const img = new MutableImgElement({ src: 'sad-smile.jpg', alt: 'sad smiles!' });
    let el = img.render();

    assert.equal('sad-smile.jpg', el.getAttribute('src'));
    assert.equal('sad smiles!', el.getAttribute('alt'));

    img.set('whoa.jpg', 'Whoa!');
    el = img.render();

    assert.equal('whoa.jpg', el.getAttribute('src'));
    assert.equal('Whoa!', el.getAttribute('alt'));
  });
});
