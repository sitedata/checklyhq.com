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
    name: 'starter',
    year: 264,
    month: 24,
    monthByYear: '22.00'
  },
  {
    name: 'growth',
    year: 649,
    month: 59,
    monthByYear: '54.03'
  },
  {
    name: 'business',
    year: 1309,
    month: 119,
    monthByYear: '109.08'
  }
]

$(document).ready(() => {
  const monthly = $('#billing-monthly')
  const annual = $('#billing-annual')

  monthly.click(() => {
    $('.toggle').toggleClass('toggle-selected')

    for (let plan of plans) {
      $(`[data-${plan.name}-price]`).text(plan.month)
      $(`[data-${plan.name}-strikeout-price]`).hide()
    }
  })
  annual.click(() => {
    $('.toggle').toggleClass('toggle-selected')

    for (let plan of plans) {
      $(`[data-${plan.name}-price]`).text(plan.monthByYear)
      $(`[data-${plan.name}-strikeout-price]`).text(` $ ${plan.month} / month `).show()
    }
  })
})
/**
 * END Pricing
 */
