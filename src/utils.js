const $body = $('body')
const $win = $(window)

export const isHomePage = () => $body.is('.home-template')
export const isPostPage = () => $body.is('.post-template')

/**
 * horizontally scroll
 *
 * @param {HTMLElement} el
 *
 * @example
 *  const stopHScroll = hScroll(document.querySelector('#J-hscroll-el'))
 *  stopHScroll() // removeEventListener
 */
export function hScroll(el) {
  if (!el) {
    console.error('Must specify el!')
    return
  }

  el.addEventListener('wheel', wheel)

  function wheel(e) {
    const delta = e.wheelDelta ? e.wheelDelta : -1 * e.deltaY
    el.scrollLeft += -delta
    e.preventDefault()
  }

  return () => el.removeEventListener('wheel', wheel)
}

export const format = function(template, vars) {
  return template.replace(/\$\{([^\{\}]*)\}/g, function(_, name) {
    var value = vars[name.trim()]
    return value == null ? '' : value + ''
  })
}

const toLen = function(source, len) {
  return (
    Array.prototype.join.call(
      {
        length: len + 1
      },
      '0'
    ) + source
  ).slice(-len)
}

export const formatDate = function(template, date) {
  if (!date) return ''
  template = template.replace(/\$([a-zA-Z])/g, function(_, key) {
    return '${' + key + '}'
  })
  date = new Date(date)
  var DAY = ['日', '一', '二', '三', '四', '五', '六']
  return format(template, {
    Y: toLen(date.getFullYear(), 4),
    y: toLen(date.getFullYear(), 2),
    M: toLen(date.getMonth() + 1, 2),
    d: toLen(date.getDate(), 2),
    D: DAY[date.getDay()],
    H: toLen(date.getHours(), 2),
    m: toLen(date.getMinutes(), 2),
    s: toLen(date.getSeconds(), 2)
  })
}

export function onresize(callback) {
  const fn = function(e) {
    const width = $win.width()
    return callback.call(this, e, width)
  }

  fn()
  window.addEventListener('resize', fn)
  return () => window.removeEventListener('resize', fn)
}
