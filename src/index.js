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

const calculateStorage = () => { /* author: https://developers.google.com/web/updates/2017/08/estimating-available-storage-space */
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

const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

export { calculateStorage, convertBytes, guid }