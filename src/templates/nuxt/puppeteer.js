require('dotenv').config({ path: './config/.env' });
const puppeteer = require('puppeteer');

(async () => {
  const PORT = process.env.PORT || 3000;
  const URL = `http://localhost:${PORT}`;

  try {
    const browser = await puppeteer.launch({
      headless: false,
      // devtools: true,
      defaultViewport: null,
      args: ['--disable-web-security'],
    });
    const pages = await browser.pages();
    const page = pages[0];

    // await page.setBypassCSP(true);
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('');
  }
})();
