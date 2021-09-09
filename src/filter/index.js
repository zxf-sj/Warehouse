import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

const filters = {
  /**
   * 功能：将时间戳按照给定的 时间/日期 格式进行处理
   * @param {Number} date 时间戳
   * @returns {String} 规范后的 时间/日期 字符串
   */
  formatDate: function (date) {
    if (!date) {
      return "---";
    }
    return dayjs(date).format("YYYY-MM-DD"); // 使用 dayjs 格式化时间
  },
  /**
   * 功能：将时间戳按照给定的 时间/日期 格式进行处理 处理为"年"级别
   * @param {Number} date 时间戳
   * @returns {String} 规范后的 时间/日期 字符串
   */
  formatYear: function (date) {
    if (!date) {
      return "---";
    }
    return dayjs(date).year(); // 使用 dayjs 格式化时间
  },
  fmtStamp(date) {
    if (!date) {
      return "---";
    }
    return dayjs(date).format("YYYY-MM-DD HH:mm"); // 使用 dayjs 格式化时间
  },
  fmtTime(date) {
    if (dayjs().diff(dayjs(date), "minutes") > 1) {
      return dayjs(date).fromNow();
    }
    return dayjs(date).format("YYYY-MM-DD HH:mm"); // 使用 dayjs 格式化时间
  },
  formatId(card, flag) {
    let strcard = "";
    if (!flag) {
      strcard = card ? card.replace(/^(.{4})(?:\d+)(.{4})$/, "$1******$2") : "";
    } else {
      strcard = card;
    }
    return strcard;
  },
  formatTelehpone(card, flag) {
    let strcard = "";
    if (!flag) {
      strcard = card ? card.replace(/^(.{3})(?:\d+)(.{4})$/, "$1******$2") : "";
    } else {
      strcard = card;
    }
    return strcard;
  },
  formatPeople(num) {
    if (num > 10000) {
      num = parseInt(num / 10000) + "万";
    }
    console.log("num", num);
    return num + "人";
  },
  formatPeople2(num) {
    if (num > 10000) {
      num = parseInt(num / 10000) + "万";
    }
    console.log("num", num);
    return num;
  },
  formatPeople3(num) {
    if (num > 10000) {
      num = parseInt(num / 10000) + "万";
    } else {
      num = num + "人";
    }
    return num;
  },
  formatRatio(ratio, num) {
    let temp = ratio;
    if (ratio == 0 && num !== 0) {
      temp = 0.01;
    }
    return temp;
  }
};
export default Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });
};
