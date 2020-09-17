---
title: Scraping & asserting on page elements
description: How to scrape web page elements like texts, buttons and forms with Google Chrome Puppeteer.
weight: 2
menu:
  docs:
    parent: "Browser checks"
---

Any standard Node.js script that successfully finishes a Puppeteer session is a valid, passing browser check. However, in
many cases you want to validate whether the session is actually showing the right stuff to the user.

This is a two step process:

1. Scrape the relevant item from the current page.
2. Assert that it shows what you expect. 

Puppeteer offers many ways to scrape elements like buttons, forms or any arbitrary HTML element. We've listed the most
used ones below, together with some tips on how to use them effectively.

## Scraping text values

Puppeteer's `page.$eval()` method is a very powerful way to actually run a selector query inside a web page. See the example
below. Note: we are using the `chai.js` library for assertions here.

```javascript
const puppeteer = require('puppeteer')
const expect = require('chai').expect

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('https://news.ycombinator.com/news')
const name = await page.$eval('.hnname > a', el => el.textContent.trim())
expect(name).to.equal("Hacker News")

await browser.close()
```

Ok, let's break this down:

1. We require all needed modules and load a page.
2. We use `$page.eval()` and pass it two arguments: 1) a query selector string 2) a callback to handle the resulting element.
3. We inspect the element's `textContent` property and use the `trim()` method to get rid of any trailing white space.
4. We validate that indeed the name is as expected.

> Some may want to use the `innerText` property here, but `textContent` is [actually better](https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext)


## Scraping a list of values

Using the `page.$$()` (notice the two dollar signs) we can scrape an array of elements in one go. You commonly use this
when the query selector you are providing targets multiple similar elements on a page, say a list of links:

```javascript
const puppeteer = require('puppeteer')
const expect = require('chai').expect

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('https://news.ycombinator.com/news')
const stories = await page.$$eval('a.storylink', links => { return links.map(link => link.textContent).slice(0, 10) })
expect(stories).to.have.lengthOf(10)
expect(stories[0]).to.be.a('string')

await browser.close()
```

1. We select all `<a>` elements that have the CSS class `storylink`.
2. We pass these into the callback and use the `map()` method to return just the link text.
3. We slice of the first 10 items.


## Scraping form input elements

### Text input fields

Use the `.value` property to get the text from an standard text input field.

```javascript
const puppeteer = require('puppeteer')
const expect = require('chai').expect

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })  
await page.type('#search_form_input_homepage', 'Puppeteer')
const searchValue = await page.$eval('#search_form_input_homepage', el => el.value)
expect(searchValue).to.equal("Puppeteer")


await browser.close()
```


### Checkboxes, radio buttons and dropdown selects

Scraping the values of other common form elements is pretty similar to scraping text inputs, with a few quirks here and
there.

```javascript
const puppeteer = require('puppeteer')
const browser = await puppeteer.launch()

const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 1800 })

await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')

// Checkboxes
const checkboxStatus = await page.$eval('#defaultCheck1', input => { return input.checked })
console.log('Checkbox checked status:', checkboxStatus)

// Radio buttons
const radios = await page.$$eval('input[name="exampleRadios"]', inputs => { return inputs.map(input => input.value) })
console.log('Radio values:', radios)

await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#select-menu')

// Dropdown selects
const selectOptions = await page.$$eval('.bd-example > select.custom-select.custom-select-lg.mb-3 > option', options => { return options.map(option => option.value ) })
console.log('Select options are:', selectOptions)

await browser.close()
```

Key takeaways are:

1. Checkboxes are mostly singular items, use the `page.$eval()` method.
2. Radio buttons come in groups, use the `page.$$eval()` method and `.map()` over result.
3. For selects, you are probably interested in the nested `option` elements, not so much the parent `select` element. Use
the `page.$$eval()` method.

## Puppeteer built-in shortcuts

Puppeteer offers some built-in shortcuts to access common elements of a typical webpage. For the full details see
[the Puppeteer docs](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-class-page).

```javascript
...
await page.goto('https://www.google.com/')

// grabs the page title
const title = await page.title()

// grabs the page's URL
const url = await page.url()

// return an object with the page's viewport setting
const viewport = await page.viewport()
console.log("Page width is:", viewport.width)

if (viewport.isMobile) {
  console.log("We're on mobile!")
}
```
