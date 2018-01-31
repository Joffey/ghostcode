import TabStore from './TabStore'
import PostStore from './PostStore'

export const tabStore = new TabStore()
export const postStore = new PostStore()

window.stores = {
  tabStore,
  postStore
}