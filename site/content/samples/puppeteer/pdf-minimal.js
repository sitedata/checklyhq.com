const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('/learn/headless')
  await page.pdf({ path: 'hd-posts.pdf' })
  await browser.close()
})()
