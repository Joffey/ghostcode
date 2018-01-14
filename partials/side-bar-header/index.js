import './style.scss'
import config from 'config'
import { themeStore } from '#/stores'

const themes = config.themes

$(document).ready(function() {
  const $sidebar = $('#J-sidebar-header')
  const $body = $('body')
  const $themeSelector = $('#J-theme-selector')
  const $sidebarBody = $('#J-side-bar-body')
  let isSearchShowing = false
  let isSideBodyShowing = true

  $themeSelector
    .html(
      themes
        .map(theme => {
          const isSelected = themeStore.theme === 'theme-' + theme ? 'selected' : ''
          return `<option value="theme-${theme}" ${isSelected}>theme-${theme}</option>`
        })
        .join('')
    )
    .on('change', function() {
      const $this = $(this)
      const theme = $this.val()

      if (theme !== themeStore.theme) {
        $body.addClass(theme).removeClass(themeStore.theme)
        themeStore.setTheme(theme)
      }
    })

  $body.addClass(themeStore.theme)

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
    $sidebarBody.removeClass('visibility-hidden')
    isSideBodyShowing = true
  }
  function sidebarBodyHide() {
    $sidebarBody.addClass('visibility-hidden')
    isSideBodyShowing = false
  }
})
