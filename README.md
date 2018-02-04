# ghostcode - ghost theme

[Online demo](http://wuliwa.la/)

This is a `vscode-like` Ghost theme, and support vscode [color-theme](https://marketplace.visualstudio.com/search?term=tag%3Acolor-theme&target=VSCode&category=All%20categories&sortBy=Relevance)

Welcome to <b>STAR</b> :) (It's still under development)

## Dev Progress

### P0
- [x] Home page
- [x] Post page
- [x] Author page
- [ ] About page
- [x] ~~Comment System: DISQUS~~(removed due to long loading time)
- [x] ~~Prev / Next post~~(removed to simplify the theme, nav through sidebar is super easy)
- [x] Change theme(Support official `vscode` theme)
- [x] Search all posts
- [ ] Responsive(v1, need to optimize)

### P1
- [x] Post Cache
- [ ] Social sharing
- [ ] Reading progress
- [ ] Post Navigation
- [x] Build in Production mode
- [ ] Compatibility testing

## Usage

### Basic
1. Download [ghostcode](https://github.com/rangzf/ghostcode/archive/master.zip) from github
2. Go to admin panel (`{your-domain}/ghost/#/settings/design/uploadtheme`) and drag `ghostcode-master.zip` to upload
3. Chose `active` to make it work

### Advance - Custom your own color theme
> ghostcode support vscode theme .json file
 

1. Get [ghostcode](https://github.com/rangzf/ghostcode/archive/master.zip) theme and unzip it
2. `cd` to ghostcode theme and run `npm install` to install dependencies
3. Get the source code of your favorite [vscode color-theme](https://marketplace.visualstudio.com/search?term=tag%3Acolor-theme&target=VSCode&category=All%20categories&sortBy=Relevance) and download it through:
	1. Theme github page
	2. Install it into/from your vscode, and then find it in your disk (Mac: /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/extensions/theme-*)
4. `cd` to the vscode theme above, usually in the `themes` directory, you can find `.json` file, that's it
5. Copy and put this file into `ghostcode/themes/` folder
6. Regist in `./config.js` `theme` field
7. Then run `npm run theme` command to turn this .json file into css
7. Edit `./default.hbs`, add class `theme-{your-theme-name}` to `html` element, remember to remove the default theme class
8. Zip and upload to your website


