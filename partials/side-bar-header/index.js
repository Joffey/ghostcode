import './style.scss'
import { onresize } from '#/utils'

$(document).ready(function() {
  const $sideWrap = $('#J-sidebar-wrap')
  const $sidebar = $('#J-sidebar-header')
  const $sidebarItem = $sidebar.find('.J-sidebar-item')
  const $header = $('.blog-header')

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

  $sideWrap.on('click', '.J-sidebar-trigger', function() {
    const target = $(this).data('target')
    if (target === 'search') {
      import(/* webpackChunkName: "search-box" */ 'partials/side-bar-body/search-box').then(() => {
        emitter.emit('switch-sidebar', { target, toggle: true })
      })
    } else {
      emitter.emit('switch-sidebar', { target, toggle: true })
    }
  })

  function sidebarBodyShow() {
    emitter.emit('sidebar-body-show')
  }

  function sidebarBodyHide() {
    emitter.emit('sidebar-body-hide')
    $sidebarItem.removeClass('active')
  }
})
