// postcss.config.js
//基于node运行处理css的工具
module.exports = {
  //plugins配置要使用的相关插件
  plugins: {
    //px转成rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};