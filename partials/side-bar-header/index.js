import './style.scss'
import { onresize } from '#/utils'

$(document).ready(function() {
  const $sidebar = $('#J-sidebar-header')
  const $sidebarBody = $('#J-side-bar-body')
  const $sidebarItem = $sidebar.find('.J-sidebar-item')
  let isSearchShowing = false
  let isSideBodyShowing = true

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
    $sidebarBody.removeClass('hidden').show()
    isSideBodyShowing = true
  }
  function sidebarBodyHide() {
    $sidebarBody.addClass('hidden').hide()
    isSideBodyShowing = false
    $sidebarItem.removeClass('active')
  }

  emitter.on('sidebar-hidden', function () {
    sidebarBodyHide()
  })

  onresize(function(e, width) {
    if (width < 800) {
      sidebarBodyHide()
    }
    if(width >= 800) {
      sidebarBodyShow()
    }
  })
})
