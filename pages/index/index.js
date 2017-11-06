const app = getApp()

Page({
  data: {
    btnName: '查 询',
    btnDisabled: false,
    result: '',
    needHelp: true
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea);
    var _this = this;
    var sn = (function () {
      var r;
      var path = e.detail.value.textarea;
      var from = path.indexOf('&sn=');
      var to = path.indexOf('&theme_id');
      if (from !== -1) {
        r = path.slice(from + 4, to)
      }
      return r;
    })()
    var header = {
      'Origin': 'https://h5.ele.me',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.8',
      'User-Agent': 'MicroMessenger Client',
      'Content-Type': 'text/plain;charset=UTF-8',
      'Accept': '*/*',
      'Referer': 'https://h5.ele.me/hongbao/',
      'X-Shard': 'eosid=3014974170551246000',
      // 'Connection': 'keep-alive',
      'Cookie': 'ubt_ssid=xc0zu3vnw3pckza0c0r1fswe4kwve83h_2017-11-02; perf_ssid=8rldm86hl1qbb0jjbcmbvvflzxekqzjc_2017-11-02; _utrace=8bb8b70ae0c1ad1a38b295cf20d7d97b_2017-11-02; eleme__ele_me=408cb6e4447104b9b2af12dfbb330be1%3A2e5c5e6dc1afb137d7b004aaccc90af32761f9b7; track_id=1509610361%7Cd047555ab922ad0017b8d3089174e214cdaf88144d5c3f2cb9%7Cb9f05b492a4754c71f984a0492652649; snsInfo=%7B%22city%22%3A%22%22%2C%22eleme_key%22%3A%224e912de2215b79fc23675d313f0dc018%22%2C%22figureurl%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F30%22%2C%22figureurl_1%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F50%22%2C%22figureurl_2%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F100%22%2C%22figureurl_qq_1%22%3A%22http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F40%22%2C%22figureurl_qq_2%22%3A%22http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F100%22%2C%22gender%22%3A%22%E7%94%B7%22%2C%22is_lost%22%3A0%2C%22is_yellow_vip%22%3A%220%22%2C%22is_yellow_year_vip%22%3A%220%22%2C%22level%22%3A%220%22%2C%22msg%22%3A%22%22%2C%22nickname%22%3A%22%E4%BC%8A%E4%B8%B6%E6%97%A0%E6%89%80%E6%9C%89%22%2C%22openid%22%3A%22642E8E48EC04337A8E07035EF65F9D1F%22%2C%22province%22%3A%22%E6%B1%9F%E8%8B%8F%22%2C%22ret%22%3A0%2C%22vip%22%3A%220%22%2C%22year%22%3A%221991%22%2C%22yellow_vip_level%22%3A%220%22%2C%22name%22%3A%22%E4%BC%8A%E4%B8%B6%E6%97%A0%E6%89%80%E6%9C%89%22%2C%22avatar%22%3A%22http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F40%22%7D'
    };
    var data = '{"method":"phone","group_sn":"' + sn + '","sign":"4e912de2215b79fc23675d313f0dc018","phone":"","device_id":"","hardware_id":"","platform":0,"track_id":"1509610361|d047555ab922ad0017b8d3089174e214cdaf88144d5c3f2cb9|b9f05b492a4754c71f984a0492652649","weixin_avatar":"http://q.qlogo.cn/qqapp/101204453/642E8E48EC04337A8E07035EF65F9D1F/40","weixin_username":"\u4f0a\u4e36\u65e0\u6240\u6709","unionid":"fuck"}';
    if(sn){
      this.setData({
        btnName: '查询中...',
        btnDisabled: true,
      });
      try {
        wx.request({
          url: 'https://restapi.ele.me/marketing/promotion/weixin/642E8E48EC04337A8E07035EF65F9D1F',
          method: 'POST',
          header: header,
          data: data,
          success: function (res) {
            console.log(res.data)
            if (res.data.message) {
              _this.setData({
                btnName: '查 询',
                btnDisabled: false,
                result: res.data.message,
                needHelp: false
              })
            } else {
              _this.setData({
                btnName: '查 询',
                btnDisabled: false,
                result: '当前领取人数为:' + res.data.promotion_records.length,
                needHelp: false
              });
            }
          }
        })
      } catch (e){
        console.log(e)
      }
    } else {
      this.setData({
        btnName: '查 询',
        btnDisabled: false,
        result: '连接地址有误',
        needHelp: true
      });
    }
    setTimeout(function(){
      _this.setData({
        result: ''
      });
    }, 5000)
  }
})
