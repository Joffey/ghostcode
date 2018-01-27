import config from 'config'
const ls = localStorage
const lsPostsKey = config.lsPostsKey

export default class {
  fetchPost(id) {
    return $.get(ghost.url.api(`posts/${id}`), {
      include: 'author',
    })
      .fail(function(err) {
        console.log(err)
      })
      .done(data => {
        const post = data.posts[0] || {}
        const {title, html, created_at, author} = post
        let lsPosts = ls.getItem(lsPostsKey)
        lsPosts = lsPosts ? JSON.parse(lsPosts) : {}

        lsPosts[id] = {
          timestamp: +new Date,
        }

        console.log(data.posts[0])
        
        ls.setItem(lsPostsKey, JSON.stringify(lsPosts))
      })
  }
}
