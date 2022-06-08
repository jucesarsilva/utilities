/**
 * convertBytes(1000)
 * result: '1000 bytes'
 * -----------------
 * convertBytes(1024)
 * result: '1.00 kb'
 * -----------------
 */
const convertBytes = b => {
  const bytes = 1024
  const kb = 1048576
  const mb = 1073741824
  const gb = 1099511600000

  if (b > 0) {
    if (b < bytes) return `${b} bytes`
    if (b < kb) return `${(parseFloat(b / 1024)).toFixed(2)} KB`
    if (b < mb) return `${(parseFloat(b / 1024 / 1024)).toFixed(2)} MB`
    if (b < gb) return `${(parseFloat(b / 1024 / 1024 / 1024)).toFixed(2)} GB`

    return `${(b / 1024 / 1024 / 1024 / 1024).toFixed(3)} TB`
  }

  return b
}

/**
 * Author: https://developers.google.com/web/updates/2017/08/estimating-available-storage-space
 */
const calculateStorage = () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    return navigator.storage.estimate()
  }

  if ('webkitTemporaryStorage' in navigator && 'queryUsageAndQuota' in navigator.webkitTemporaryStorage) {
    return new Promise((resolve, reject) => {
      navigator.webkitTemporaryStorage.queryUsageAndQuota(
        (usage, quota) => {
          resolve({ usage: usage, quota: quota })
        },
        reject
      )
    })
  }

  return Promise.resolve({ usage: NaN, quota: NaN })
}

/**
 * guid()
 * result sample: '36d53800-6720-e235-ccf4-761955770e37'
 */
const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

/**
 * fisherYatesShuffle([1,2,3])
 * result sample: [2,1,3]
 */
const fisherYatesShuffle = (a) => {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}


/**
 * fisherShuffle([1,2,3])
 * result sample: [2,1,3]
 */
 const fisherShuffle = (arr) => {
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    for (let j = 0, k = 0; j <= arr.length - 1; j++) {
      if (result[j] === undefined) {
        if (k === r) {
          result[j] = arr[i]
          break
        }
        k++
      }
    }
  }
  return result
}

/**
 * const persons = [{name: 'john', age: 12}, {name: 'Mattew': age: 11}]
 * const orderedPersons = sortByKey(persons, 'age')
 * result sample: [{name: 'Mattew': age: 11}, {name: 'john', age: 12}]
 */
const sortByKey = (array = [], key) => array.sort((a, b) => (a[key] > b[key] ? 1 : -1))

export { calculateStorage, convertBytes, guid, fisherShuffle, fisherYatesShuffle }