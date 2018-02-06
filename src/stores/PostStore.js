import {lsPostsKey, lsPostsExpiration} from 'config'
import { tabStore } from '#/stores'
import { formatDate } from '#/utils'
const ls = localStorage

export default class {
  fetchPost(id) {
    const cache = this.fromCache(id)

    return cache
      ? $.Deferred().resolve(cache)
      : $.get(ghost.url.api(`posts/${id}`), {
          include: 'author'
        })
          .fail(err => {
            console.log(err)
            if (err.status === 404) {
              tabStore.deleteTabItem(id)
            }
          })
          .done(data => {
            const post = data.posts[0] || {}
            // console.log(post)
            this.cachePost(id, post)
            return post
          })
  }

  /**
   * Read post from cache first
   * @param {number} id -> post id
   *  - only cache 5min
   */
  fromCache(id) {
    let lsPosts = ls.getItem(lsPostsKey)
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {}

    const post = lsPosts[id]
    const useable = post && +new Date() - post.timestamp <= lsPostsExpiration

    if (useable) {
      // console.info('[Post readed from cache]:', post.title)
      const author = JSON.parse(post.author)
      return {
        posts: [{ ...post, author, fromCache: 1 }]
      }
    }

    return null
  }

  deletePostFromCache(id) {
    let lsPosts = ls.getItem(lsPostsKey)
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {}
    // console.log('[deleted post success]:', lsPosts[id].title)

    delete lsPosts[id]

    ls.setItem(lsPostsKey, JSON.stringify(lsPosts))
  }

  cachePost(id, post) {
    if (post.fromCache) return

    let lsPosts = ls.getItem(lsPostsKey)
    lsPosts = lsPosts ? JSON.parse(lsPosts) : {}

    lsPosts[id] = {
      ...post,
      author: JSON.stringify(post.author),
      timestamp: +new Date()
    }

    // cache up to 5 posts
    // delete the oldest one if more than 5
    let ids = Object.keys(lsPosts)
    if (ids.length > 5) {
      const shouldDeleteId = ids
        .map(id => ({
          timestamp: lsPosts[id].timestamp,
          id
        }))
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(item => item.id)
        .shift()

      delete lsPosts[shouldDeleteId]
    }

    // console.log(ids.length)
    ls.setItem(lsPostsKey, JSON.stringify(lsPosts))
  }
}
