/* eslint-env jquery */

/**
 * TRACKING
 */

function handleGoogleTrackSignup () {
  // eslint-disable-next-line no-undef
  gtag('event', 'sign_up', {
    'event_category': 'engagement'
  })
}

$('[data-signup]').click(function () {
  handleGoogleTrackSignup()
})

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

// Show the dashboard button is cookie is present
if (document.cookie.split(';').filter((item) => item.trim().startsWith('checkly_has_account=')).length) {
  $('#login-button').hide()
  $('#dashboard-button').show()
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
    year: 319,
    month: 29,
    monthByYear: '26.58'
  },
  {
    name: 'growth',
    year: 825,
    month: 75,
    monthByYear: 68.75
  },
  {
    name: 'business',
    year: 2189,
    month: 199,
    monthByYear: '182.42'
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
