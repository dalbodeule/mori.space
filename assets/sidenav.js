import $ from 'jquery'

$(document).on('ready readyAgain', () => {
  $('.button-collapse').sideNav({
    edge: 'left',
    draggable: true
  })
})
