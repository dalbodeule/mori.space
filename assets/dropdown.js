import $ from 'jquery'

$(document).on('ready readyAgain', () => {
  $('.dropdown-button').dropdown({
    hover: false,
    belowOrigin: true
  })
})
