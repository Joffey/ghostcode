import './style.scss'
import history from '#/history'
import { postStore } from '#/stores'
import { formatDate } from '#/utils'

$(function() {
  const $body = $('body')
  const $post = $('#J-post')
  const $prevNext = $('#J-prev-next')
  const $prev = $prevNext.find('.J-prev-post')
  const $next = $prevNext.find('.J-next-post')
  const $title = $post.find('.J-post-title')
  const $content = $post.find('.J-post-content')
  const $meta = $post.find('.J-post-meta')
  const $featureImage = $post.find('.J-post-feature-image')
  const origin = location.origin

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

  $prevNext.on('click', '.J-prev-next-item', function(e) {
    const $this = $(this)
    const id = $this.data('id')
    const url = $this.attr('href')
    const slug = $this.data('slug')

    e.preventDefault()
    emitter.emit('add-post-tab', {
      id,
      url,
      slug,
      title: $this.attr('title')
    })
  })

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

      // fetch prev and next and refresh
      postStore
        .fetchPrevNextPost({
          published_at,
          slug,
          type: 'both'
        })
        .then(function(prev, next) {
          const prevPost = prev[0].posts[0]
          const nextPost = next[0].posts[0]

          console.log(published_at, prevPost, nextPost)

          prevPost
            ? $prev
                .show()
                .html(`<a href="${prevPost.url}" data-id="${prevPost.id}" title="${prevPost.title}" data-slug="${prevPost.slug}">${prevPost.title}</a>`)
            : $prev.hide()

          nextPost
            ? $next
                .show()
                .html(`<a href="${nextPost.url}" data-id="${nextPost.id}" title="${nextPost.title}" data-slug="${nextPost.slug}">${nextPost.title}</a>`)
            : $next.hide()
        })

      'function' === typeof window.refreshComment && window.refreshComment(`ghost-${comment_id}`, origin + url, title)
    })
  })
})
