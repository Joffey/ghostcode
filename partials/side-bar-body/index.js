import './blog-tree'
import './style.scss'

$(function() {
  const $sideBody = $('#J-side-bar-body')
  const $searchBox = $('#J-search-box')
  const $blogTree = $('#J-blog-tree')
  const $searchInput = $searchBox.find('.J-input-search')
  const $tagTree = $('#J-blog-tree')
  const $html = $('html')

  emitter.on('sidebar-body-hide', () => {
    $html.removeClass('noscroll')
    $sideBody.hide()
  })
  emitter.on('sidebar-body-show', () => {
    $html.addClass('noscroll')
    $sideBody.show()
  })

  let currentTarget = 'blog-tree'
  emitter.on('switch-sidebar', ({ target }) => {
    const isSearch = target === 'search'
    if (currentTarget === target) {
      $html.toggleClass('noscroll').toggleClass('archive-show')
      $sideBody.toggleClass('show')
    } else {
      $html.addClass('noscroll').addClass('archive-show')
      $sideBody.addClass('show')
    }
    currentTarget = target
    if (isSearch) {
      $blogTree.hide()
      $searchBox.removeClass('hidden')
      $searchInput.focus()
    } else {
      $blogTree.show()
      $searchBox.addClass('hidden')
    }
  })
})
