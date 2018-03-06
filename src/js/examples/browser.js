module.exports = {
  preFix: `const assert = require('assert')
const puppeteer = require('puppeteer')
let browser
let page

before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8' })
  await page.setViewport({ width: 1280, height: 800 })
})`,
  postFix: `after(async () => {
    await browser.close()
  })`,
  browserExamples: [
    {
      name: 'Check Etsy Shopping Cart',
      checkType: 'BROWSER',
      frequency: 5,
      activated: true,
      muted: false,
      locations: [],
      variables: [],
      alertChannels: {},
      websocketClientId: '',
      script: `describe('Check Etsy shopping cart', () => {
  it('shows the correct category', async () => {
    await page.goto('https://www.etsy.com/c/art-and-collectibles/collectibles/figurines?ref=catnav-66')
    const categoryTitle = await page.evaluate(() => document.querySelector('h1').textContent)
    assert.equal(categoryTitle, 'Figurines & Knicknacks')
  }).timeout(20000)

  it('selects the first product', async () => {
    const products = await page.$$('.placeholder-content')
    await products[0].click()
    await page.waitForSelector('button.btn-buy-box')
    assert.ok('Buy button showing')
  }).timeout(10000)

  it('adds the product to the cart', async () => {
    await page.click('button.btn-buy-box')
    await page.waitForSelector('h1.item-count')
    const quantity = await page.evaluate(() => document.querySelector('h1.item-count').textContent)
    assert.equal(quantity, '1 item in your cart')
  }).timeout(10000)
})`
    },
    {
      name: 'Check Alibaba product search',
      checkType: 'BROWSER',
      frequency: 5,
      activated: true,
      muted: false,
      locations: [],
      variables: [],
      alertChannels: {},
      websocketClientId: '',
      script: `describe('Alibaba product search', () => {
  it('has search input', async () => {
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.alibaba.com', { waitUntil: 'networkidle0' })
    const searchInput = await page.$('input.ui-searchbar-keyword')
    assert.ok(searchInput)
  }).timeout(20000)

  it('shows products after search input', async () => {
    await page.type('input.ui-searchbar-keyword', 'lucky cat')
    await page.click('input.ui-searchbar-submit')
    await page.waitForSelector('[data-content="abox-ProductNormalList"]')
    const firstProduct = await page.$('.item-content')
    await page.screenshot({ path: 'ali.png' })
    assert.ok(firstProduct)
  }).timeout(10000)
})`
    },
    {
      name: 'Check Google Search result',
      checkType: 'BROWSER',
      frequency: 5,
      activated: true,
      muted: false,
      locations: [],
      variables: [],
      alertChannels: {},
      websocketClientId: '',
      script: `describe('Google Search', () => {
  it('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    const title = await page.title()
    assert.equal(title, 'Google')
  }).timeout(10000)

  it('shows my link as first search result', async () => {
    await page.type('input[name=q]', 'puppeteer', { delay: 100 })
    await page.click('input[type="submit"]')
    await page.waitForSelector('h3 a')
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h3 a'))
        .map(a => { return a.textContent })
    })
    assert.equal('This will fail...', links[0])
  }).timeout(10000)
})`
    }
  ]
}
