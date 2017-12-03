import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    $('#loader-wrapper').fadeOut('slow', () => {
      $(this).remove()
    })
  })

  $(document).trigger('readyAgain')
  $('.button-collapse').sideNav('hide')
}
