import './blog-tree'
import './style.scss'

$(function() {
  const $searchBox = $('#J-search-box')
  const $blogTree = $('#J-blog-tree')
  const $searchInput = $searchBox.find('.J-input-search')
  const $tagTree = $('#J-blog-tree')

  emitter.on('switch-sidebar', ({ target }) => {
    const isSearch = target === 'search'

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
