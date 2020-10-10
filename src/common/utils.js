// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
function dataFormat(fmt) { // author: meizz
  const now = new Date();
  const o = {
    'M+': now.getMonth() + 1, // 月份
    'd+': now.getDate(), // 日
    'h+': now.getHours(), // 小时
    'm+': now.getMinutes(), // 分
    's+': now.getSeconds(), // 秒
    'q+': Math.floor((now.getMonth() + 3) / 3) // 季度
    // 'S': now.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (now.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}

// 格式化时间并且增加时区
function formatDate(date) {
  date = date.toISOString()
  const arr = date.split('T');
  const d = arr[0];
  const darr = d.split('-');
  const t = arr[1];
  const tarr = t.split('.000');
  const marr = tarr[0].split(':');
  const dd = parseInt(darr[0]) + '/' + parseInt(darr[1]) + '/' + parseInt(darr[2]) + ' ' + parseInt(marr[0]) + ':' + parseInt(marr[1]) + ':' + parseInt(marr[2]);
  return formatDateTime(dd);
}
function formatDateTime(date) {
  const time = new Date(Date.parse(date));
  time.setTime(time.setHours(time.getHours() + 8));
  const Y = time.getFullYear() + '-';
  const M = addZero(time.getMonth() + 1) + '-';
  const D = addZero(time.getDate()) + ' ';
  const h = addZero(time.getHours()) + ':';
  const m = addZero(time.getMinutes()) + ':';
  const s = addZero(time.getSeconds());
  return Y + M + D + h + m + s;
}
function addZero(num) {
  return num < 10 ? '0' + num : num;
}

export {
  dataFormat,
  formatDate
}
