const app = getApp()

Page({
  data: {
    btnName: '查 询',
    btnName1: '查 询',
    btnDisabled: false,
    needHelp: true,
    url: '',
    url1: '',
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
    luckyNum: 0,
    luckyNum1: 0,
    users: [],
    users1: []
  },
  getData: function (str) {
      return '{"method":"phone","group_sn":"' + str + '","sign":"4e912de2215b79fc23675d313f0dc018","phone":"","device_id":"","hardware_id":"","platform":0,"track_id":"1509610361|d047555ab922ad0017b8d3089174e214cdaf88144d5c3f2cb9|b9f05b492a4754c71f984a0492652649","weixin_avatar":"http://q.qlogo.cn/qqapp/101204453/642E8E48EC04337A8E07035EF65F9D1F/40","weixin_username":"\u4f0a\u4e36\u65e0\u6240\u6709","unionid":"fuck"}'
    
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
  getUrl1: function (e) {
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
      url1: url
    });
  },
  queryEleNum: function (e) {
    var _this = this;
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

        // luckuy num
        _this.setData({
          luckyNum: url.slice(url.indexOf('&lucky_number=') + 14, url.indexOf('&track_id'))
        })
      }
      return r;
    })()

    if (sn) {
      this.setData({
        btnName: '...',
        btnDisabled: true,
      });
      try {
        if (sn.length === 32) {
          wx.request({
            url: 'https://xiang.pics/getEleNum?sn=' + sn,
            method: 'GET',
            success: function (res) {
              console.log(res)
              _this.setData({
                  btnName: '查 询',
                  btnDisabled: false,
                  needHelp: false
              })
	            wx.showModal({
		            title: '提示',
		            content: res.data.result,
		            showCancel: false
	            })
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
                  needHelp: false
                })
	              wx.showToast({
		              title: res.data.message
	              })
              } else {
                _this.setData({
                  btnName: '查 询',
                  btnDisabled: false,
                  needHelp: false,
                    users: res.data.promotion_records
                });
                
	              wx.showToast({
		              title: '查询成功!'
	              })
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
        needHelp: true
      });
	    wx.showToast({
		    title: '链接地址有误!'
	    })
    }
  },
  queryEleNum1: function (e) {
    var _this = this;
    var sn = (function () {
      var r, from, to;
      var url = _this.data.url1;
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

        // luckuy num
        _this.setData({
          luckyNum1: url.slice(url.indexOf('&lucky_number=') + 14, url.indexOf('&track_id'))
        })
      }
      return r;
    })()

    if (sn) {
      this.setData({
        btnName1: '...',
        btnDisabled: true,
      });
      try {
        if (sn.length === 32) {
          wx.request({
            url: 'https://xiang.pics/getEleNum?sn=' + sn,
            method: 'GET',
            success: function (res) {
              console.log(res)
              _this.setData({
                  btnName1: '查 询',
                  btnDisabled: false,
                  needHelp: false
              })
	            wx.showModal({
		            title: '提示',
		            content: res.data.result,
		            showCancel: false
	            })
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
                  btnName1: '查 询',
                  btnDisabled: false,
                  needHelp: false
                })
	              wx.showToast({
		              title: res.data.message
	              })
              } else {
                _this.setData({
                  btnName1: '查 询',
                  btnDisabled: false,
                  needHelp: false,
                    users1: res.data.promotion_records
                });
                
	              wx.showToast({
		              title: '查询成功!'
	              })
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
        needHelp: true
      });
	    wx.showToast({
		    title: '链接地址有误!'
	    })
    }
  },
  clear(){
    this.setData({
      users: [],
      needHelp: true
    })
  },
  clear1(){
    this.setData({
      users1: [],
      needHelp: true
    })
  }
})
