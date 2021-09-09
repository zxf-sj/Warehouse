export function format(date, format) {
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}
export function formatLocaleString(date) {
  var obj = date,
    formatStr = 'yyyy-MM-dd hh:mm:ss';
  return format(obj, formatStr);
}
export function formatLocaleStringEndDay(date) {
  var obj = date,
    formatStr = 'yyyy-MM-dd';
  return format(obj, formatStr);
}
export function formatLocaleStringHMS(date) {
  var obj = date,
    formatStr = 'hh:mm';
  return format(obj, formatStr);
}
export function getTimeStr(opentime) {
  var minute = 60;
  var hour = 3600;
  var day = 86400;
  var currentTime = new Date().valueOf();
  var time = currentTime - opentime;
  time = time / 1000;
  if (time < minute) {
    return Math.ceil(time) + "秒";
  } else if (minute <= time && time < hour) {
    return Math.ceil(time / minute) + "分钟"
  } else if (hour <= time && time < day) {
    return Math.ceil(time / hour) + "小时"
  } else {
    return Math.ceil(time / day) + "天"
  }
}
