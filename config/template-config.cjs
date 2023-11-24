/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '汪汪队长，元气满满，加油考研',
    desc: `
      **🗓️{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{province.DATA}}-{{city.DATA}}
      
      天气☁️：{{weather.DATA}}，{{notice.DATA}}
      
      气温(最高/最低)🌡️:{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}} ，风级: {{wind_scale.DATA}}
      
      ---
      
      今天是我们相识的第{{see_day.DATA}}天
      
      今天是我们恋爱的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      💗：{{lover_prattle.DATA}} 
      
      💗：{{earthy_love_words.DATA}} 
      
      {{one_talk.DATA}} -- {{talk_from.DATA}} 
      
      {{poetry_title.DATA}} -- {{poetry_content.DATA}} 
      
      {{note_en.DATA}} 
      {{note_ch.DATA}} 
      
      {{comprehensive_horoscope.DATA}} 
      
      {{poison_chicken_soup.DATA}} 
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '燕砸，元气满满，加油求学',
    desc: `
      **🗓️{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{province.DATA}}-{{city.DATA}}
      
      天气☁️：{{weather.DATA}}，{{notice.DATA}}
      
      气温(最高/最低)🌡️:{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}} ，风级: {{wind_scale.DATA}}
      
      ---
      
      今天是我们相识的第{{see_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      💗：{{lover_prattle.DATA}} 
      
      💗：{{earthy_love_words.DATA}} 
      
      {{one_talk.DATA}} -- {{talk_from.DATA}} 
      
      {{poetry_title.DATA}} -- {{poetry_content.DATA}} 
      
      {{note_en.DATA}} 
      {{note_ch.DATA}} 
      
      {{comprehensive_horoscope.DATA}} 
      
      {{poison_chicken_soup.DATA}} 
    `
  },
  {
    id: '0004',
    title: '飞飞呀，元气满满，加油求学',
    desc: `
      **🗓️{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{province.DATA}}-{{city.DATA}}
      
      天气☁️：{{weather.DATA}}，{{notice.DATA}}
      
      气温(最高/最低)🌡️:{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}} ，风级: {{wind_scale.DATA}}
      
      ---
      
      今天是我们相识的第{{see_day.DATA}}天
      
      今天是我们恋爱的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      💗：{{lover_prattle.DATA}} 
      
      💗：{{earthy_love_words.DATA}} 
      
      {{one_talk.DATA}} -- {{talk_from.DATA}} 
      
      {{poetry_title.DATA}} -- {{poetry_content.DATA}} 
      
      {{note_en.DATA}} 
      {{note_ch.DATA}} 
      
      {{comprehensive_horoscope.DATA}} 
      
      {{poison_chicken_soup.DATA}} 
    `
  },
  /*
  {
    id: '0005',
    title: '陈大帅，元气满满，加油求学',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{province.DATA}}-{{city.DATA}}
      
      天气：{{weather.DATA}}，{{notice.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}} ，风级: {{wind_scale.DATA}}
      
      ---
      
      今天是我们相识的第{{see_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{one_talk.DATA}} -- {{talk_from.DATA}} 
      
      {{poetry_title.DATA}} -- {{poetry_content.DATA}} 
      
      {{note_en.DATA}} 
      {{note_ch.DATA}} 
      
      {{comprehensive_horoscope.DATA}} 
      
      {{poison_chicken_soup.DATA}} 
    `
  },
  */
]

module.exports = TEMPLATE_CONFIG
