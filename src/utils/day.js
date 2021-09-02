// 使用第三方day.js时间包

import dayjs from 'dayjs'

//配置中文语言包
import 'dayjs/locale/zh-cn'

//配置相对时间
import relativeTime  from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

//全局使用
dayjs.locale('zh-cn') 
//使用例如
console.log(dayjs().format('YYYY-MM-DD'));
//使用日期格式化
console.log(dayjs('2019-09-02').from(dayjs()));



