const Store = require('electron-store')

export default (opts = {}) => {
  console.log('createElectronStore', opts)
  return new Store(opts)
}
