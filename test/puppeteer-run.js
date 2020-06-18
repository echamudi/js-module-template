const puppeteer = require('puppeteer');
const { exec } = require('child_process');

(async () => {
  const server = exec('http-server -p 8080 .');

  server.stdout.on('error', (err) => {
    throw new Error(err);
  });

  server.stdout.on('data', (data) => {
    if (data.includes('Hit CTRL-C to stop the server')) {
      server.stdout.removeAllListeners();
    }
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('pageerror', (err) => {
    throw new Error(err);
  });

  page.on('error', (err) => {
    throw new Error(err);
  });

  page.on('console', (msg) => {
    if (msg.type() === 'assert') {
      console.log(msg.location());
      throw new Error('Assertion failed');
    }

    console.log(msg.text());
  });

  await page.goto('http://127.0.0.1:8080/test/test.browser.html');
  await page.goto('http://127.0.0.1:8080/test/test.browser-es6.html');
  await browser.close();

  server.kill();
})();
