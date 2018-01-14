import ThemeStore from './ThemeStore'
import TabStore from './TabStore'
import PostStore from './PostStore'

export const themeStore = new ThemeStore()
export const tabStore = new TabStore()
export const postStore = new PostStore()

window.stores = {
  themeStore,
  tabStore,
  postStore
}