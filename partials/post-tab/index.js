import config from 'config'
import './style.scss'
import { tabStore } from '#/stores'
import history from '#/history'
import { hScroll, isPostPage } from '#/utils'

$(function() {

  if (!isPostPage()) return

  let $postTabs = $('#J-post-tab')
  const $scrollWrap = $('.J-post-tab-scroller-wrap')
  const ndScrollWrap = $scrollWrap.get(0)
  const $home = $('.J-home-entry')
  const homeWidth = $home.outerWidth()

  emitter.on('add-post-tab', post => {
    const tabs = tabStore.getTabs()
    if (!tabs.filter(tab => tab.id === post.id).length) {
      tabs.push({ ...post })

      tabStore.setTabs(tabs)
    }

    emitter.emit('tab-refresh', { ...post })
  })

  emitter.on('tab-refresh', (active = {}) => {
    const activeId = active.id
    const tabs = tabStore.getTabs()

    const $active = $('#J-post-tab')
      .html(
        tabs
          .map(
            tab =>
              `<div title="${tab.title}" class="J-tab-item light hover-opacity1 flex-item0 single-line item ${
                activeId === tab.id ? 'active' : ''
              }" data-id="${tab.id}">${tab.title}<i class="close J-post-tab-close lighter hover-opacity1" data-slug="${tab.slug}"></i></div>`
          )
          .join('')
      )
      .find('.active')

    history.push(active.url, { ...active })
    tabStore.setCurrentTab({ ...active })

    scroll2view($active)
  })

  $postTabs
    .on('click', '.J-post-tab-close', function(e) {
      e.stopPropagation()
      tabStore.deleteTabItem(
        $(this)
          .parent('.J-tab-item')
          .data('id')
      )
    })
    .on('click', '.J-tab-item', function() {
      const $this = $(this)
      if ($this.is('.active')) return

      const id = $this.data('id')
      const currentTab = tabStore.getTabs().filter(tab => tab.id === id)[0] || {}

      $this
        .addClass('active')
        .siblings()
        .removeClass('active')
      tabStore.setCurrentTab(currentTab)
      history.push(currentTab.url, { ...currentTab })

      scroll2view($this)
    })

  /**
   * scroll selected tab item into view if it is out of view
   */
  function scroll2view($active) {
    // wrap element
    const wrapWidth = $scrollWrap.width()
    const wrapScrollLeft = $scrollWrap.scrollLeft()
    const wrapRight = wrapWidth + wrapScrollLeft
    const threshold = 10

    // active element
    const ndActive = $active.get(0)
    const activeWidth = $active.outerWidth()
    const activeLeft = ndActive.offsetLeft
    const activeRight = activeLeft + activeWidth
    if (activeRight > wrapWidth + wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeRight - wrapWidth - homeWidth - threshold
    }
    if (activeLeft <= wrapScrollLeft) {
      ndScrollWrap.scrollLeft = activeLeft - homeWidth - threshold
    }
  }

  hScroll($scrollWrap.get(0))
})
