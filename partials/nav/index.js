import './style.scss'

$(function() {
  const $nav = $('#J-blog-nav')

  emitter.on('nav-open', function() {
    $nav.addClass('opened')
  })

  $nav.on('click', '.J-blog-nav-mask, .J-blog-nav-close', function() {
    $nav.removeClass('opened')
  })
})
