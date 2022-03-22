"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertBytes = exports.calculateStorage = void 0;

var convertBytes = function convertBytes(b) {
  var bytes = 1024;
  var kb = 1048576;
  var mb = 1073741824;
  var gb = 1099511600000;

  if (b > 0) {
    if (b < bytes) return "".concat(b, " bytes");
    if (b < kb) return "".concat(parseFloat(b / 1024).toFixed(2), " KB");
    if (b < mb) return "".concat(parseFloat(b / 1024 / 1024).toFixed(2), " MB");
    if (b < gb) return "".concat(parseFloat(b / 1024 / 1024 / 1024).toFixed(2), " GB");
    return "".concat((b / 1024 / 1024 / 1024 / 1024).toFixed(3), " TB");
  }

  return b;
};

exports.convertBytes = convertBytes;

var calculateStorage = function calculateStorage() {
  /* author: https://developers.google.com/web/updates/2017/08/estimating-available-storage-space */
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    return navigator.storage.estimate();
  }

  if ('webkitTemporaryStorage' in navigator && 'queryUsageAndQuota' in navigator.webkitTemporaryStorage) {
    return new Promise(function (resolve, reject) {
      navigator.webkitTemporaryStorage.queryUsageAndQuota(function (usage, quota) {
        resolve({
          usage: usage,
          quota: quota
        });
      }, reject);
    });
  }

  return Promise.resolve({
    usage: NaN,
    quota: NaN
  });
};

exports.calculateStorage = calculateStorage;