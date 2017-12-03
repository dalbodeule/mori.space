import $ from 'jquery'

export default ({ app }) => {
  $(document).ready(() => {
    $('#loader-wrapper').fadeOut('slow', () => {
      $(this).remove()
    })
  })

  app.router.afterEach((to, from) => {
    $(document).trigger('readyAgain')
    $('.button-collapse').sideNav('hide')
  })
}
