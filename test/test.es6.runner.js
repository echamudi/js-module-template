const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', async (msg) => {
    console.log(msg.text());

    if (msg.text() === 'fail') {
      await browser.close();
      process.exit(1);
    }

    if (msg.text() === 'success') {
      await browser.close();
      process.exit(0);
    }
  });

  await page.goto('http://localhost:8080/test/test.es6.html');
})();
