/**
 * Mocking client-server processing
 */
import _data from './data.json'

const TIMEOUT = 100

export default {
  getDetails: (cb, timeout) =>
    setTimeout(() => cb(_data.Brastlewark), timeout || TIMEOUT)
}
