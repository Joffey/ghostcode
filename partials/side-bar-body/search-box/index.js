import ghostHunter from 'assets/jquery.ghosthunter'
import './style.scss'
import { isPostPage } from '#/utils'
import history from '#/history'

$(function() {
  const $searchBox = $('#J-search-box')
  const $searchInput = $searchBox.find('.J-input-search')
  const $results = $('#J-search-results')
  let $searchResultItems
  const $win = $(window)

  $searchInput.ghostHunter({
    results: '#J-search-results',
    info_template: `<div class="search-results-amount"><div class="light"><b>{{amount}}</b> posts found</div></div>`,
    result_template: `
      <a href="{{link}}" data-id="{{id}}" class="search-result-item J-search-result-item" title="{{title}}">
        <h3>{{title}}</h3>
        <div class="lighter">{{pubDate}}</div>
      </a>
    `,
    onComplete: results => {
      $searchResultItems = $searchBox.find('.J-search-result-item')
      const pathname = location.pathname
      $searchResultItems.each(function() {
        const $this = $(this)
        $this.attr('href') === pathname && $this.addClass('active')
      })
    }
  })

  $searchBox
    .on('click', '.J-search-result-item', function(e) {
      const $this = $(this)
      if (isPostPage()) {
        e.preventDefault()

        if ($win.width() <= 700) {
          emitter.emit('sidebar-hidden')
        }
        const id = $this.data('id')
        const url = $this.attr('href')
        emitter.emit('add-post-tab', {
          id,
          url,
          title: $this.attr('title'),
          slug: ''
        })
      }
    })
    .on('click', '.J-search-clear', function() {
      $searchInput.val('')
      $results.html('')
      $searchInput.focus()
    })

  history.listen(location => {
    const nextTab = location.state

    $searchResultItems &&
      $searchResultItems
        .removeClass('active')
        .filter((idx, item) => {
          return $(item).data('id') === nextTab.id
        })
        .addClass('active')
  })
})
