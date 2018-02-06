module.exports = {
  // localstorage tab key
  lsPostTabKey: 'ghostcode-post-tabs',
  // tab expiration 1d
  lsPostTabExpiration: 24 * 60 * 60 * 1000,
  // localstorage theme key
  lsThemeKey: 'ghostcode-theme',
  // localstorage post key
  lsPostsKey: 'ghostcode-posts',
  // post expiration time 1min
  lsPostsExpiration: 1 * 60 * 1000,
  // [themeName, uiTheme]
  // uiTheme:  vs-dark, vs(you can find it in theme-xx/package.json contributes.themes.uiTheme)
  theme: ['dark_defaults', 'vs-dark'],
}
