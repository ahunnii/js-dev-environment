import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import { doesNotReject } from 'assert';

describe ('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it("should say 'Hello world!'", () => {
      // read file content to variable
      const index = fs.readFileSync('./src/index.html', "utf-8");

      // pass this variable to jsdom:
      jsdom.env(index, function(err, window) {
          const h1 = window.document.getElementByTagName('h1')[0];   // read our h1
          expect(h1.innerHTML).to.equal("Helloooooooo World!");      //<---- passed
          done();
          window.close();
      });
  })
})