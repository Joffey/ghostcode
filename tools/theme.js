/**
 * @file read vscode theme files in ../themes and turn them into .scss file in src/styles/themes/xxx
 *  - Filter with 'themes' in config.js
 */

const fs = require('fs')
const path = require('path')

const themesPath = path.resolve(__dirname, '../themes')
const themeStyleRoot = path.resolve(__dirname, '../src/styles/themes')
const themeDefaultVars = fs.readFileSync(path.resolve(themeStyleRoot, 'default.scss')).toString()
const themeCommonStyle = fs.readFileSync(path.resolve(themeStyleRoot, 'common.scss')).toString()

const themes = fs
  .readdirSync(themesPath)
  .map(themeName => {
    if (themeName.startsWith('.') || themeName === 'result.json') return

    const themePath = path.resolve(themesPath, themeName)
    const { colors } = require(themePath)

    const str = Object.keys(colors)
      .map(color => {
        const key = color.split('.').join('-')
        const value = colors[color]

        return `  $${key}: ${value};`
      })
      .join('\n')

    const themeNamePrefix = themeName
      .match(/^(.*)\..+$/)[1]
      .split('_')
      .join('-')
    const themeStyleItemPath = path.resolve(themeStyleRoot, themeNamePrefix)

    if (!fs.existsSync(themeStyleItemPath)) {
      fs.mkdirSync(themeStyleItemPath)
    }

    fs.writeFileSync(
      path.resolve(themeStyleItemPath, 'index.scss'),
      [`.theme-${themeNamePrefix} {\n`, `${themeDefaultVars}\n\n`, `${str}\n\n`, `${themeCommonStyle}\n\n`, '}'].join(
        ''
      )
    )

    return {
      name: themeNamePrefix,
      import: `@import "./${themeNamePrefix}/index.scss";\n`
    }
  })
  .filter(t => t)

fs.writeFileSync(path.resolve(themeStyleRoot, 'index.scss'), themes.map(theme => theme.import).join(''))
fs.writeFileSync(
  path.resolve(themesPath, 'result.json'),
  `{\n  "themes": [${themes.map(theme => `"${theme.name}"`)}]\n}`
)
