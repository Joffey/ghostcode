import config from 'config'

const ls = localStorage

export default class {
  currentTab = null

  getTabs() {
    let tabs = ls.getItem(config.lsPostTabKey) || ''

    return tabs ? tabs.split(',').map(tab => {
      const [id, title, url, slug] = tab.split(':')

      return { id, title, url, slug }
    }) : []
  }

  setTabs(tabs) {
    ls.setItem(
      config.lsPostTabKey,
      tabs.length ? tabs.map(
        tab => `${tab.id}:${tab.title}:${tab.url}:${tab.slug}`
      ).join(',') : ''
    )
  }

  setCurrentTab(tab) {
    this.currentTab = tab
  }

  deleteTabItem(id) {
    let tabs = this.getTabs()
    let nextTab = null
    const isCurrentTab = id === this.currentTab.id

    const deletedIdx = tabs.findIndex(tab => tab.id === id)
    tabs = tabs.filter((tab, idx) => tab.id !== id)

    this.setTabs(tabs)

    if (tabs.length) {
      if (isCurrentTab) {
        nextTab = deletedIdx === 0 ? tabs[0] : tabs[deletedIdx - 1]
      }

      emitter.emit('tab-refresh', nextTab || this.currentTab)
    } else {
      location.href = '/'
    }
  }
}