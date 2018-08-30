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
      $('#api-check-results').text(res.apiCheckResults)
      $('#browser-check-results').text(res.browserCheckResults)
    })
})

/**
 * START Pricing
 */

const plans = [
  {
    name: 'starter',
    year: 165,
    month: 15
  },
  {
    name: 'growth',
    year: 440,
    month: 40
  },
  {
    name: 'business',
    year: 880,
    month: 80
  }
]

$(document).ready(() => {
  const monthly = $('#billing-monthly')
  const annual = $('#billing-annual')

  monthly.click(() => {
    $('.toggle').toggleClass('toggle-selected')

    for (let plan of plans) {
      $(`[data-${plan.name}-price]`).text(plan.month)
    }
    $('[data-billing-interval]').text('/ month')

  })
  annual.click(() => {
    $('.toggle').toggleClass('toggle-selected')

    for (let plan of plans) {
      $(`[data-${plan.name}-price]`).text(plan.year)
    }
    $('[data-billing-interval]').text('/ year')
  })
})
/**
 * END Pricing
 */
