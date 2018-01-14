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
        const created_at = formatDate('$Y.$M.$d', post.created_at)

        $title.html(post.title)
        $content.html(post.html)
        $meta.html(`Posted by ${post.author.name} on ${created_at}`)

        document.title = post.title

        emitter.emit('refresh-reading-time', {
          time: ''
        })
      })
  })
})
