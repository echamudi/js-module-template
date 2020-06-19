const puppeteer = require('puppeteer');
const assert = require('assert');

describe('test browser', async () => {
  it('runs using script directly', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let errorCount = 0;

    page.on('pageerror', (err) => {
      console.log(err);
      errorCount += 1;
    });

    page.on('error', (err) => {
      console.log(err);
      errorCount += 1;
    });

    page.on('console', (msg) => {
      if (msg.type() === 'assert') {
        console.log(msg.location());
        errorCount += 1;
      }

      console.log(msg.text());
    });

    await page.goto('http://127.0.0.1:8080/test/test.browser-es6.html');
    await browser.close();

    assert.deepStrictEqual(errorCount, 0);
  });

  it('runs using es6 module', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let errorCount = 0;

    page.on('pageerror', (err) => {
      console.log(err);
      errorCount += 1;
    });

    page.on('error', (err) => {
      console.log(err);
      errorCount += 1;
    });

    page.on('console', (msg) => {
      if (msg.type() === 'assert') {
        console.log(msg.location());
        errorCount += 1;
      }

      console.log(msg.text());
    });

    await page.goto('http://127.0.0.1:8080/test/test.browser.html');
    await browser.close();

    assert.deepStrictEqual(errorCount, 0);
  });
});
