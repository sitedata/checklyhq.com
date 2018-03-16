/* eslint-env jquery */

/**
 * START Navbar
 */

$(document).on('scroll', () => {
  if ($(document).scrollTop() > 100) {
    $('nav.navbar').addClass('navbar-fixed-drop-shadow')
  } else {
    $('nav.navbar').removeClass('navbar-fixed-drop-shadow')
  }
})

/**
 * END Navbar
 */
