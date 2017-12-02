import $ from 'jquery'

$(document).on('ready readyAgain', () => {
  $('.sidebox').stick_in_parent({
    parent: $('.row')
  })
})
