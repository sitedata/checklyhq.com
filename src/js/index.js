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
$(document).ready(() => {
  $(document).on('scroll', () => {
    if ($(document).scrollTop() > 100) {
      $('nav.navbar').addClass('navbar-fixed-drop-shadow')
    } else {
      $('nav.navbar').removeClass('navbar-fixed-drop-shadow')
    }
  })
})

$(document).ready(() => {
// Show the dashboard button is cookie is present
  if (document.cookie.split(';').filter((item) => item.trim().startsWith('checkly_has_account=')).length) {
    $('#login-button').hide()
    $('#dashboard-button').show()
  }
})

/**
 * END Navbar
 */

$(document).ready(() => {
  if($('body').hasClass('landing')){
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
  }

})

/**
*get headlessdev posts
*/

$(document).ready(() => {
  if($('div').hasClass('opensource')){
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
      var x2js = new X2JS();
      const  data = x2js.xml2json(xhr.responseXML.documentElement);
      var titleId = '';
      var descId = '';
      var linkId = '';
      data.channel.item.forEach(function(node, i) {
        if (i < 6) {
          titleId ='#card-'+(i+1)+'-title';
          descId = '#card-'+(i+1)+'-description';
          linkId = '#card-'+(i+1)+'-link';
          $(titleId).text(node.title);
          $(descId).text(node.description);
          $(linkId).attr('href', node.link);
        }
      })
    }

    xhr.open("GET", "https://theheadless.dev/rss.xml");
    xhr.responseType = "document";
    xhr.send();

    fetch("https://api.github.com/repos/checkly/headless-recorder")
      .then(function (response) {
        return response.json()
      })
      .then(function (res) {
        let stars = ''
        if (res.stargazers_count > 1000) {
          stars = (res.stargazers_count/1000).toFixed(1) + "k"
        } else {
          stars = res.stargazers_count
        }
        $('#headless-recorder').text(stars);
      })
    fetch("https://api.github.com/repos/checkly/theheadless.dev")
      .then(function (response) {
        return response.json()
      })
      .then(function (res) {
        let stars = ''
        if (res.stargazers_count > 1000) {
          stars = (res.stargazers_count/1000).toFixed(1) + "k"
        } else {
          stars = res.stargazers_count
        }
        $('#theheadless-dev').text(stars);
      })
    fetch("https://api.github.com/repos/checkly/terraform-provider-checkly")
      .then(function (response) {
        return response.json()
      })
      .then(function (res) {
        let stars = ''
        if (res.stargazers_count > 1000) {
          stars = (res.stargazers_count/1000).toFixed(1) + "k"
        } else {
          stars = res.stargazers_count
        }
        $('#terraform-provider').text(stars);
      })
    
  }
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
    year: 5489,
    month: 499,
    monthByYear: '457.42'
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

 /**
 *Footer DropDown in Tablet&Mobile
 */
 $(document).ready(() => {
  for (var i = 1; i < 6; i++) {
    const menu_header_id = '#menu_' + i + '_header'
    const menu_id = '#menu_' + i
    var menu_header = $(menu_header_id)

    menu_header.click(() => {
      if ($(menu_id).attr('class') === 'desktop-show') {
        $(menu_id).addClass('show')
        $(menu_header_id).addClass('rotate')
      } else {
        $(menu_id).removeClass('show')
        $(menu_header_id).removeClass('rotate')
      }
    })
  }
})


/**
 * Docs Menu
 */

$(document).ready(() => {
  if($('div').hasClass('docs-menu')){
    for (var i = 0; i < 11; i++) {
      const docsMenuTitle_id = '#docs-menu-title-'+i;
      const docsMenuSub_id = '#docs-menu-'+i+'-sub';
      var doc_menu_header = $(docsMenuTitle_id);

      doc_menu_header.click(() => {
        if (doc_menu_header.attr('class') === 'docs-menu-title') {
          $(docsMenuTitle_id).addClass('active')
          $(docsMenuSub_id).addClass('sub-display')
        } else {
          $(docsMenuTitle_id).removeClass('active')
          $(docsMenuSub_id).removeClass('sub-display')
        }
      })
    }
  }
})