/**
 * @file read vscode theme files in ../themes and turn them into .scss file in src/styles/themes/xxx
 *  - Filter with 'themes' in config.js
 */

const fs = require('fs')
const path = require('path')
const hexToRgba = require('hex-to-rgba')
const { theme } = require('../config')

const [themeName, uiTheme] = theme

const themesPath = path.resolve(__dirname, '../themes')
const themeStyleRoot = path.resolve(__dirname, '../src/styles/themes')
const themeDefaultVars = fs.readFileSync(path.resolve(themeStyleRoot, 'default.scss')).toString()
const themeCommonStyle = fs.readFileSync(path.resolve(themeStyleRoot, 'common.scss')).toString()

const darkDefault = require(path.resolve(themesPath, './dark_defaults.json'))
const lightDefault = require(path.resolve(themesPath, './light_defaults.json'))

const uiThemeMap = {
  'vs-dark': darkDefault.colors,
  vs: lightDefault.colors,
  'vs-light': lightDefault.colors
}

const themes = fs
  .readdirSync(themesPath)
  .filter(themePath => themePath.indexOf(themeName) > -1)
  .map(themeName => {
    if (themeName.startsWith('.') || themeName === 'result.json') return

    const themePath = path.resolve(themesPath, themeName)
    let { colors } = require(themePath)
    colors = Object.assign({}, uiThemeMap[uiTheme], colors)

    const str = Object.keys(colors)
      .map(color => {
        const key = color.split('.').join('-')
        let value = colors[color]
        if (value.length === 5 || value.length === 9) {
          value = hexToRgba(value)
        }

        return `  $${key}: ${value};`
      })
      .join('\n')

    const themeNamePrefix = themeName.match(/^(.*)\..+$/)[1]
    const themeStyleItemPath = path.resolve(themeStyleRoot, themeNamePrefix)

    if (!fs.existsSync(themeStyleItemPath)) {
      fs.mkdirSync(themeStyleItemPath)
    }

    fs.writeFileSync(
      path.resolve(themeStyleItemPath, 'index.scss'),
      [`.theme-${themeNamePrefix} {\n`, `${themeDefaultVars}\n\n`, `${str}\n\n`, `${themeCommonStyle}\n\n`, '}'].join('')
    )

    return {
      name: themeNamePrefix,
      import: `@import "./${themeNamePrefix}/index.scss";\n`
    }
  })
  .filter(t => t)

fs.writeFileSync(path.resolve(themeStyleRoot, 'index.scss'), themes.map(theme => theme.import).join(''))
fs.writeFileSync(path.resolve(themesPath, 'result.json'), `{\n  "themes": [${themes.map(theme => `"${theme.name}"`)}]\n}`)
