import './style.scss'
import history from '#/history'
import { postStore } from '#/stores'
import { formatDate } from '#/utils'

$(function() {
  const $postWrap = $('#J-post-wrap')
  const $post = $('#J-post')
  const $title = $post.find('.J-post-title')
  const $content = $post.find('.J-post-content')
  const $meta = $post.find('.J-post-meta')
  const $featureImage = $post.find('.J-post-feature-image')
  const origin = location.origin

  highlight()

  if ($('body').is('.post-template')) {
    emitter.emit('add-post-tab', {
      id: $post.data('id'),
      title: $post.data('title'),
      slug: $post.data('slug'),
      url: $post.data('url')
    })

    emitter.emit('refresh-reading-time', {
      time: $('.J-reading-time-hidden').html()
    })
  }

  // refresh post data
  history.listen((location, action) => {
    const postId = location.state.id

    if (!postId) return

    postStore.fetchPost(postId).done(function(data) {
      const post = data.posts[0] || {}
      const { published_at, title, html, author, feature_image, comment_id, url, slug } = post

      $title.html(title)
      $content.html(html)
      $meta.html(`Posted by <a href="/author/${author.slug}/">${author.name}</a> on ${formatDate('$Y.$M.$d', published_at)}`)
      $featureImage[feature_image ? 'removeClass' : 'addClass']('hidden')
        .find('figure')
        .css({
          backgroundImage: `url(${feature_image})`
        })

      emitter.emit('refresh-reading-time', {
        time: ''
      })

      document.title = title

      'function' === typeof window.refreshComment && window.refreshComment(`ghost-${comment_id}`, origin + url, title)

      highlight()
      $postWrap.animate({ scrollTop: 0 }, 300)
    })
  })

  function highlight() {
    $('pre code').each(function(i, block) {
      window.hljs && window.hljs.highlightBlock(block)
    })
  }
})
