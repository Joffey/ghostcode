import history from './history'

import './emitter'

import './styles/index.scss'

import 'partials/icons'

import 'partials/post-tab'

import 'partials/side-bar-header'

import 'partials/side-bar-body'
import 'partials/footer'
import 'partials/post'
import 'partials/post-nav'
import 'partials/home'
import 'partials/author'
import 'partials/page-about'

export { history }

setTimeout(() => document.dispatchEvent(new CustomEvent('ghostcodeReady')), 0)
