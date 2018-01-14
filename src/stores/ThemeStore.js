import config from 'config'
const ls = localStorage
const lsThemeKey = config.lsThemeKey

export default class {
  theme = ls.getItem(lsThemeKey) || config.defaultTheme
  
  setTheme (theme) {
    this.theme = theme
    ls.setItem(lsThemeKey, theme)
  }
}