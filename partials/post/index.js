import './style.scss'
import history from '#/history'
import { postStore } from '#/stores'
import { formatDate } from '#/utils'

$(function() {
  const $body = $('body')
  const $post = $('#J-post')
  const $title = $post.find('.J-post-title')
  const $content = $post.find('.J-post-content')
  const $meta = $post.find('.J-post-meta')
  const $featureImage = $post.find('.J-post-feature-image')

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

  history.listen((location, action) => {
    const postId = location.state.id

    postId &&
      postStore.fetchPost(postId).done(function(data) {
        const post = data.posts[0] || {}
        const { created_at, title, html, author, feature_image } = post

        $title.html(title)
        $content.html(html)
        $meta.html(`Posted by <a href="/author/${author.slug}/">${author.name}</a> on ${formatDate('$Y.$M.$d', created_at)}`)
        $featureImage[feature_image ? 'removeClass' : 'addClass']('hidden').find('figure').css({
          backgroundImage: `url(${feature_image})`
        })
        emitter.emit('refresh-reading-time', {
          time: ''
        })
        document.title = title
      })
  })
})
