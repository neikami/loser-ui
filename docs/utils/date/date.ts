/* 时间戳方法
 *
 */
const allDate = {
  nowTime(bool) {
    // 参数 ss秒
    // 根据情况返回时间戳
    // 不传默认毫秒
    if (/\bss\b/i.test(bool)) {
      var timestamp = (Date.parse(new Date())) / 1000
    } else {
      var timestamp = Date.parse(new Date())
    }
    return timestamp
  },
  nowTimestyle(uTime = Date.parse(new Date())) {
    /* 参数 指定日期 2015/06/23 08:00:20    2015-06-23 08:00:20
         * 返回 时间戳秒
         * 不传 返回当前毫秒
         */
    let oldTime = (new Date(uTime)).getTime()
    return oldTime
  },
  TimeToDay(format = 'YYYY-MM-DD hh:mm:ss', currDate = Date.parse(new Date())) {
    /* 参数  YYYY/MM/DD hh:mm:ss或者YYYY-MM-DD hh:mm:ss... 作用：选择返回值 日期的格式
         *      currDate:指定时间戳
         * 返回  2018/03/14 13:37:51或者2018-03-14 13:37:51...
         * 不传  format默认返回YYYY-MM-DD hh:mm:ss
         *      currDate默认返回当前时间
         */
    if (!isNaN(arguments[0])) {
      format = 'YYYY-MM-DD hh:mm:ss'
      currDate = arguments[0]
    }
    let currDateD = new Date(currDate)
    let o = {
      'M+': currDateD.getMonth() + 1, // month
      'D+': currDateD.getDate(), // day
      'h+': currDateD.getHours(), // hour
      'm+': currDateD.getMinutes(), // minute
      's+': currDateD.getSeconds(), // second
      'q+': Math.floor((currDateD.getMonth() + 3) / 3), // quarter
      'S': currDateD.getMilliseconds()// millisecond
    }
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (currDateD.getFullYear() + '')
        .substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  },
  timeToTime(startTime, endTime) {
    /* 参数 startTime:开始时间   2015-05-05 05:05:05
         *      endTime:结束时间  2017-11-11 11:11:11
         * 返回 返回时间戳毫秒
         * 必传
         */
    let start = (new Date(startTime)).getTime()
    let end = (new Date(endTime)).getTime()
    return end - start
  },
  timeTodayTime(times = new Date()) {
    return times.toLocaleDateString().replace(/\//g, '-') + ' ' + times.toTimeString().substr(0, 8)
  },
  TimeToDate(uTime = Date.parse(new Date())) {
    /* 参数 时间戳毫秒
         * 返回 2018/3/14 下午12:26:03
         * 不传 返回当前日期格式
         */
    uTime = uTime.toString().length === 13 ? uTime / 1000 : uTime
    return new Date(parseInt(uTime) * 1000).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
  },
  TimetoDateDay(uTime = Date.parse(new Date())) {
    /* 参数 时间戳毫秒
         * 返回 时间戳转换成八位日期2014-5-5
         * 不传 当前日期
         */
    uTime = uTime.toString().length === 13 ? uTime / 1000 : uTime
    let myDate = new Date(uTime * 1000)
    let year = myDate.getFullYear()
    let month = myDate.getMonth() + 1
    let day = myDate.getDate()
    month = parseInt(month) < 10 ? '0' + month : month
    day = parseInt(day) < 10 ? '0' + day : day
    return year + '-' + month + '-' + day
  },
  timetoDateClock(uTime = Date.parse(new Date())) {
    /* 参数 时间戳毫秒
         * 返回 时分  10:13
         * 不传 返回当前时分
         */
    uTime = uTime.toString().length === 13 ? uTime / 1000 : uTime
    let myDate = new Date(uTime * 1000)
    let hours = myDate.getHours()
    let minutes = myDate.getMinutes()
    return hours + ':' + minutes
  },
  timetoDateSecond(uTime = Date.parse(new Date())) {
    /* 参数 时间戳
         * 返回 时分秒 13:31:20
         * 不传 返回当前时分秒
         */
    uTime = uTime.toString().length === 13 ? uTime / 1000 : uTime
    let myDate = new Date(uTime * 1000)
    let hours = myDate.getHours()
    let minutes = myDate.getMinutes()
    let second = myDate.getSeconds()
    second = second < 10 ? '0' + second : second
    return hours + ':' + minutes + ':' + second
  },
  toDayStartAndEnd(beforeday = 0, nextday = 1) {
    var start = new Date(new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000 * beforeday) // 当天0点
    var end = new Date(new Date(new Date().toLocaleDateString()).getTime() + (nextday * 24 * 60 * 60 * 1000 - 1)) // 当天23:59
    return { start: start, end: end }
  },
  nextDay(val) {
    var str = this.TimeToDay('YYYY-MM-DD')
    var date = new Date(new Date(str).getTime() + val * 24 * 60 * 60 * 1000)
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return Y + M + D
  },
  // 取传入时间的当月终止日期 val 传入时间 ext 前 n 天
  monthEndDay(uTime = this.TimeToDay('YYYY-MM-DD'), ext = 0) {
    var date = new Date(uTime)
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var D = new Date(Y, M, 0 - ext).getDate()
    return Y + '-' + M + '-' + D
  },
  //取传入时间的前一年的日期+时间
  lastYearDay(curDate = Date.parse(new Date())) {
    let date = new Date(curDate);
    let Y = date.getFullYear() - 1;
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + '-' + M + '-' + D + ' 00:00:00'
  },
  //取传入时间的前一个月的日期+时间
  lastMonthDay(curDate = Date.parse(new Date())) {
    let date = new Date(curDate);
    let Y = date.getFullYear();
    let M = date.getMonth();
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    if (M == 0) {
      M = 12;
      Y = Y - 1;
    } else if (M < 10) {
      M = '0' + M
    }
    return Y + '-' + M + '-' + D + ' 00:00:00'
  }
}

export {
  allDate
}
