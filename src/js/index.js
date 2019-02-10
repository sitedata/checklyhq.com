/* eslint-env jquery */

/**
 * START Navbar
 */

if (window.location.pathname === '/') {
  $(document).on('scroll', () => {
    if ($(document).scrollTop() > 100) {
      $('nav.navbar').addClass('navbar-fixed-drop-shadow')
    } else {
      $('nav.navbar').removeClass('navbar-fixed-drop-shadow')
    }
  })
} else {
  $('nav.navbar').removeClass('fixed-top')
}
/**
 * END Navbar
 */

$(document).ready(() => {
  fetch('https://api.checklyhq.com/public-stats')
    .then(function (response) {
      return response.json()
    })
    .then(function (res) {
      const countApi = res.apiCheckResults.toLocaleString()
      const countBrowser = res.browserCheckResults.toLocaleString()
      $('#api-check-results').text(countApi)
      $('#browser-check-results').text(countBrowser)
    })
})

/**
 * START Pricing
 */

const plans = [
  {
    name: 'developer',
    year: 77,
    month: 7,
    monthByYear: '6.41'
  },
  {
    name: 'starter',
    year: 264,
    month: 24,
    monthByYear: '22'
  },
  {
    name: 'growth',
    year: 649,
    month: 59,
    monthByYear: '54.03'
  },
  {
    name: 'business',
    year: 1749,
    month: 159,
    monthByYear: '145.75'
  }
]

$(document).ready(() => {
  const button = $('.billing-cycle-toggler')
  let current = 'MONTH'

  button.click(() => {
    $('.toggle').toggleClass('toggle-selected')
    if (current === 'YEAR') {
      for (let plan of plans) {
        $(`[data-${plan.name}-price]`).text(plan.month)
        $(`[data-${plan.name}-strikeout-price]`).hide()
      }
      current = 'MONTH'
    } else {
      for (let plan of plans) {
        $(`[data-${plan.name}-price]`).text(plan.monthByYear)
        $(`[data-${plan.name}-strikeout-price]`).text(` $ ${plan.month} / month `).show()
      }
      current = 'YEAR'
    }
  })
})
/**
 * END Pricing
 */
