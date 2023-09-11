/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });
  it('addParagraph adds a paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph('this is a test')

    expect(document.querySelectorAll('p').length).toBe(3);
  });
  it('clearParagraph removes all paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph('this is a test')
    view.clearParagraphs()

    expect(document.querySelectorAll('p').length).toBe(0);
  });
});