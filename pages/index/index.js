const app = getApp()

Page({
  data: {
    btnName: '查 询',
    btnDisabled: false,
    result: '',
    needHelp: true,
    url: '',
    color: '#09bb07',
    elemeHeader: {
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
    },
    meituanHeader: {
      'Origin': 'https://activity.waimai.meituan.com',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.8',
      'User-Agent': 'MicroMessenger Client',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Referer': 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=5CDFBC28A2494746875F24FB74DE1286',
      'X-Requested-With': 'XMLHttpRequest',
      'Connection': 'keep-alive',
      'Cookie': '_lxsdk_cuid=15f7163e62bc8-0a389cee201e02-574e6e46-3d10d-15f7163e62bc8; _lxsdk=15f7163e62bc8-0a389cee201e02-574e6e46-3d10d-15f7163e62bc8; JSESSIONID=hl2uouvfl06y14p7tkucaj25p; __mta=41374237.1509435893320.1509436218236.1509436957064.7; grap_cookie_phone_ab=18012312312; h_w_uuid=b9f4de21-7db7-4aa3-8892-923adfc6770d; user_coupon_token=47790119; _lxsdk_s=15f7163e62e-665-f8c-a03%7C%7C96; h_cookie_phone=18012312312'
    },
  },
  getData: function (str) {
    if (str.length === 16) {
      return '{"method":"phone","group_sn":"' + str + '","sign":"4e912de2215b79fc23675d313f0dc018","phone":"","device_id":"","hardware_id":"","platform":0,"track_id":"1509610361|d047555ab922ad0017b8d3089174e214cdaf88144d5c3f2cb9|b9f05b492a4754c71f984a0492652649","weixin_avatar":"http://q.qlogo.cn/qqapp/101204453/642E8E48EC04337A8E07035EF65F9D1F/40","weixin_username":"\u4f0a\u4e36\u65e0\u6240\u6709","unionid":"fuck"}'
    } else {
      return 'userPhone=18012312312&channelUrlKey=B2EA8E1ABA8B47EA82DB475BA17B517D&urlKey=' + str + '&dparam=75b9ee1f7b574e0d995ffd76e97ae7af&_token=eJyN0luPmkAUAOD%2FMq%2BdyFyZGZNNw0Ut0lW7Kl3d%2BMAiKl5QEbw1%2Fe%2Bd0U27SbtJCcl8HA6HOQd%2BgCKYgjpGCBEJQXnQ5kgxaisuEBEQJO9jiiKiIHgtIh%2FUX7CUBCpJJybypAMvWBEEMZJoAs1dqs3FBBKmT5MV6CSwKMvdoW5ZcVJmx6y81E5xtomz2ibNyirOa8l2YyXbarfNrcMiLtJkEed5urZc0nBkAzuuI10mtImvV%2B46WLgcC%2F9zVazD9PLAPb%2FpekQ6hCkmmC0FbxLWdAXzG5hIG0AA9GY2A7MZgjlkVOkYVkbUCAkCmbL%2Fk%2FhDir%2BI%2FkVbaUpNJSWkmH0opcWNFPktriVuElq3RhCyISX3TnR7lMgb9ZejlN3IdJTh%2B8t1KXZ%2FTOgEzm80ZW1kqA%2FNWwLW%2FwMVd5oKUpo5rswc9Rq%2FmyeHQac3HPyZ6tu1Tivf0g%2FZPAd1kLZP66Xf6M6vzqPTs7xTcJ52EWstdksH7aOvX85eGJxGYfMp8mfYGvaz2XQQJYoXl6osr5R%2F38%2BiotU7btMt6h%2FbZLzoHtDo23jsDgf2J8lJUvSc0TX0w8vKjwZe8xq2H21v3O4kdtWz2IV1yL7V6wetRu4m6coZRf0lmU%2Bt53N5ROTVrjBzj86FWXtPPl%2FDtPEAfv4CXrrL4Q%3D%3D'
    }
  },
  getUrl: function (e) {
    var url = e.detail.value;
    console.log(url)
    if (url.indexOf('meituan') !== -1) {
      console.log('meituan')
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#f0b209'
      })
      this.setData({
        color: '#f0b209'
      });
    } else if (url.indexOf('ele.me') !== -1) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#3da8f9'
      })
      this.setData({
        color: '#3da8f9'
      });
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#09bb07'
      })
      this.setData({
        color: '#09bb07'
      });
    }
    this.setData({
      url: url
    });
  },
  queryEleNum: function (e) {
    var _this = this;
    console.log(wx);
    var sn = (function () {
      var r, from, to;
      var url = _this.data.url;
      if (url.indexOf('meituan') !== -1) {
        from = url.indexOf('urlKey=');
        if (from !== -1) {
          r = url.substr(from + 7, 32)
        }
      } else {
        from = url.indexOf('&sn=');
        to = url.indexOf('&theme_id');
        if (from !== -1) {
          r = url.slice(from + 4, to)
        }
      }
      return r;
    })()
    if (sn) {
      this.setData({
        btnName: '查询中...',
        btnDisabled: true,
      });
      try {
        if (sn.length === 32) {
          wx.request({
            url: 'https://activity.waimai.meituan.com/coupon/grabShareCoupon',
            method: 'POST',
            header: {
              'Origin': 'https://activity.waimai.meituan.com',
              'Accept-Encoding': 'gzip, deflate, br',
              'Accept-Language': 'zh-CN,zh;q=0.8',
              'User-Agent': 'MicroMessenger Client',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': '*/*',
              'Referer': 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=5CDFBC28A2494746875F24FB74DE1286',
              'X-Requested-With': 'XMLHttpRequest',
              'Connection': 'keep-alive',
              'Cookie': '_lxsdk_cuid=15f7163e62bc8-0a389cee201e02-574e6e46-3d10d-15f7163e62bc8; _lxsdk=15f7163e62bc8-0a389cee201e02-574e6e46-3d10d-15f7163e62bc8; JSESSIONID=hl2uouvfl06y14p7tkucaj25p; __mta=41374237.1509435893320.1509436218236.1509436957064.7; grap_cookie_phone_ab=18012312312; h_w_uuid=b9f4de21-7db7-4aa3-8892-923adfc6770d; user_coupon_token=47790119; _lxsdk_s=15f7163e62e-665-f8c-a03%7C%7C96; h_cookie_phone=18012312312'
            },
            data: 'userPhone=18012312312&channelUrlKey=B2EA8E1ABA8B47EA82DB475BA17B517D&urlKey=7B2C06C3B6F249CFAF4D218308F4FD27&dparam=75b9ee1f7b574e0d995ffd76e97ae7af&_token=eJyN0luPmkAUAOD%2FMq%2BdyFyZGZNNw0Ut0lW7Kl3d%2BMAiKl5QEbw1%2Fe%2Bd0U27SbtJCcl8HA6HOQd%2BgCKYgjpGCBEJQXnQ5kgxaisuEBEQJO9jiiKiIHgtIh%2FUX7CUBCpJJybypAMvWBEEMZJoAs1dqs3FBBKmT5MV6CSwKMvdoW5ZcVJmx6y81E5xtomz2ibNyirOa8l2YyXbarfNrcMiLtJkEed5urZc0nBkAzuuI10mtImvV%2B46WLgcC%2F9zVazD9PLAPb%2FpekQ6hCkmmC0FbxLWdAXzG5hIG0AA9GY2A7MZgjlkVOkYVkbUCAkCmbL%2Fk%2FhDir%2BI%2FkVbaUpNJSWkmH0opcWNFPktriVuElq3RhCyISX3TnR7lMgb9ZejlN3IdJTh%2B8t1KXZ%2FTOgEzm80ZW1kqA%2FNWwLW%2FwMVd5oKUpo5rswc9Rq%2FmyeHQac3HPyZ6tu1Tivf0g%2FZPAd1kLZP66Xf6M6vzqPTs7xTcJ52EWstdksH7aOvX85eGJxGYfMp8mfYGvaz2XQQJYoXl6osr5R%2F38%2BiotU7btMt6h%2FbZLzoHtDo23jsDgf2J8lJUvSc0TX0w8vKjwZe8xq2H21v3O4kdtWz2IV1yL7V6wetRu4m6coZRf0lmU%2Bt53N5ROTVrjBzj86FWXtPPl%2FDtPEAfv4CXrrL4Q%3D%3D',
            success: function (res) {
              console.log(res)
              if (res.data.data.length > 800) {
                _this.setData({
                  btnName: '查 询',
                  btnDisabled: false,
                  result: '最大的已经被领取',
                  needHelp: false
                })
              } else {
                _this.setData({
                  btnName: '查 询',
                  btnDisabled: false,
                  result: '最大的还没有被领取',
                  needHelp: false
                })
              }
            }
          })
        } else {
          wx.request({
            url: 'https://restapi.ele.me/marketing/promotion/weixin/642E8E48EC04337A8E07035EF65F9D1F',
            method: 'POST',
            header: _this.data.elemeHeader,
            data: _this.getData(sn),
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
        }
      } catch (e) {
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
    setTimeout(function () {
      _this.setData({
        result: ''
      });
    }, 5000)
  }
})
