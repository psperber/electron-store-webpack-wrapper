const Store = require('electron-store')

export default (opts = {}) => {
  return new Store(opts)
}
