import './style.scss'
import history from '#/history'

$(document).ready(function() {
  const $tagTree = $('#J-blog-tree')
  const $allPosts = $('#J-posts-all-hidden')
  const pathname = location.pathname
  const $body = $('body')
  const $untagedPosts = $tagTree.find('.J-untaged-posts')

  const tags = {}
  const untaged = []
  $allPosts.find('.J-post').each(function() {
    const $post = $(this)
    const slug = $post.data('slug')
    const $tags = $post.find('.J-tag')

    if (pathname.includes(slug)) {
      $post.addClass('active')
    }

    if ($tags.length === 0) {
      untaged.push($post[0].outerHTML)
    } else {
      $tags.each(function() {
        const tag = this.innerText
        if (!tags[tag]) {
          tags[tag] = []
        }

        tags[tag].push($post[0].outerHTML)
      })
    }
  })

  /**
   * copy posts to corresponding tag
   */
  $tagTree.find('.J-blog-tree-posts').each(function() {
    const $this = $(this)
    const posts = tags[$this.data('tag')]

    if (!posts) {
      $this
        .html('<ul><li class="blog-tree-no-posts lighter">Coming soon...</li></ul>')
        .parent()
        .addClass('post-hidden')
      return
    }

    $this.html(posts.join('')).css({
      height: 26 * posts.length
    })
  })

  $untagedPosts.html(untaged.join(''))

  const $posts = $('.J-blog-tree-tags .J-post')

  // event binding
  $tagTree
    .addClass('loading-hidden')
    .on('click', '.J-blog-tree-tagname', function() {
      $(this)
        .parent()
        .toggleClass('post-hidden')
    })
    .on('click', '.J-go2post', function(e) {
      const $this = $(this)

      if ($body.is('.home-template')) return

      if ($this.parents('.J-post').is('.active')) {
        e.preventDefault()
        return
      }

      const id = $this.data('id')
      const url = $this.attr('href')

      e.preventDefault()
      emitter.emit('add-post-tab', {
        id,
        url,
        title: $this.attr('title'),
        slug: $this.parents('.J-post').data('slug')
      })
    })

  history.listen(location => {
    const nextTab = location.state

    $posts
      .removeClass('active')
      .filter((idx, post) => {
        return $(post).data('slug') === nextTab.slug
      })
      .addClass('active')
  })
})
