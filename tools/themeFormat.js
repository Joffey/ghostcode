/**
 * @file format origin theme file
 * - delete comments from the .json file
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const os = require('os')

const themesPath = path.resolve(__dirname, '../themes')

function delComments(file) {
  const rl = readline.createInterface({
    input: fs.createReadStream(file)
  })

  let str = ''

  rl.on('line', line => {
    if (!/\s*\/\/.*$/.test(line)) {
      str += line + os.EOL
    }
  })

  rl.on('close', () => {
    fs.writeFileSync(file, str, 'utf-8')
    console.log(`${file}: complete`)
  })
}

fs.readdirSync(themesPath).map(themeName => {
  delComments(path.resolve(themesPath, themeName))
})
