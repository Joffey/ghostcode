import { themes } from './themes/result.json'

export default {
  // all themes
  themes,
  // localstorage tab key
  lsPostTabKey: 'coder-post-tabs',
  // tab expiration 1d
  lsPostTabExpiration: 24 * 60 * 60 * 1000,
  // localstorage theme key
  lsThemeKey: 'coder-theme',
  // localstorage post key
  lsPostsKey: 'coder-posts',
  // post expiration time 1min
  lsPostsExpiration: 1 * 60 * 1000,
  // default theme
  defaultTheme: 'dark_default',
}
