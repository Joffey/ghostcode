import './style.scss'
import { theme } from 'config'

$(document).ready(function() {
  const $sidebar = $('#J-sidebar-header')
  const $body = $('body')
  const $sidebarBody = $('#J-side-bar-body')
  let isSearchShowing = false
  let isSideBodyShowing = true

  $body.addClass('theme-' + theme)

  $sidebar
    .on('click', '.J-sidebar-logo', function() {
      const $this = $(this)

      if ($this.is('.active')) {
        sidebarBodyHide()
        $this.removeClass('active')
      } else {
        sidebarBodyShow()
        emitter.emit('switch-sidebar', { target: 'logo' })
        $this
          .addClass('active')
          .siblings()
          .removeClass('active')
      }
    })
    .on('click', '.J-sidebar-search', function() {
      const $this = $(this)

      if ($this.is('.active')) {
        sidebarBodyHide()
        $this.removeClass('active')
      } else {
        sidebarBodyShow()

        $this
          .addClass('active')
          .siblings()
          .removeClass('active')

        import(/* webpackChunkName: "search-box" */ 'partials/side-bar-body/search-box').then(() => {
          emitter.emit('switch-sidebar', { target: 'search' })
        })
      }
    })

  function sidebarBodyShow() {
    $sidebarBody.removeClass('hidden')
    isSideBodyShowing = true
  }
  function sidebarBodyHide() {
    $sidebarBody.addClass('hidden')
    isSideBodyShowing = false
  }
})
