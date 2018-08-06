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
