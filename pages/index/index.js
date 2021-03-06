const app = getApp()

Page({
	data: {
		btnName: '查 询',
		btnDisabled: false,
		needHelp: true,
		url: '',
		color: '#09bb07',
		elemeHeader: {
            'origin': 'https://h5.ele.me',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9',
            'authority': 'h5.ele.me',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36 QQBrowser/4.5.123.400',
            'content-type': 'text/plain;charset=UTF-8',
            'accept': '*/*',
            'referer': 'https://h5.ele.me/hongbao/?hardware_id=&is_lucky_group=True&lucky_number=0&track_id=&platform=0&sn=1d49060c9f06f099&theme_id=4299&device_id=&refer_user_id=552354122',
            'x-shard': 'eosid=2110224551677194500',
            'cookie': 'perf_ssid=qlj904fr2gcm5iwbn59yvunj8p0xvjiu_2018-12-04; ubt_ssid=3bi4ktdmeujdgbohyx2m8c8mz2ofu1sg_2018-12-04; _utrace=2bbeedce388099116dbd4a0d17aa92ab_2018-12-04; snsInfo[101204453]=%7B%22city%22%3A%22%22%2C%22constellation%22%3A%22%22%2C%22eleme_key%22%3A%224e912de2215b79fc23675d313f0dc018%22%2C%22figureurl%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F30%22%2C%22figureurl_1%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F50%22%2C%22figureurl_2%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F100%22%2C%22figureurl_qq_1%22%3A%22http%3A%2F%2Fthirdqq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F40%22%2C%22figureurl_qq_2%22%3A%22http%3A%2F%2Fthirdqq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F100%22%2C%22gender%22%3A%22%E7%94%B7%22%2C%22is_lost%22%3A0%2C%22is_yellow_vip%22%3A%220%22%2C%22is_yellow_year_vip%22%3A%220%22%2C%22level%22%3A%220%22%2C%22msg%22%3A%22%22%2C%22nickname%22%3A%22%E4%BC%8A%E4%B8%B6%E6%97%A0%E6%89%80%E6%9C%89%22%2C%22openid%22%3A%22642E8E48EC04337A8E07035EF65F9D1F%22%2C%22province%22%3A%22%E6%B1%9F%E8%8B%8F%22%2C%22ret%22%3A0%2C%22vip%22%3A%220%22%2C%22year%22%3A%221991%22%2C%22yellow_vip_level%22%3A%220%22%2C%22name%22%3A%22%E4%BC%8A%E4%B8%B6%E6%97%A0%E6%89%80%E6%9C%89%22%2C%22avatar%22%3A%22http%3A%2F%2Fthirdqq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F40%22%7D; track_id=1543893764|7dc68447f2a13210a0aa2868283fa4aaa44040e72747672556|febb3d751492b9b8a4339418b6deb6e0; cna=a3nPEdxkG1sCATFK5YKWg+c0; _uab_collina=156039434390846904525535; _umdata=GE76A2F84AD2A84E901C1F694C3013DB01B3A46; USERID=4915166426; UTUSER=4915166426; SID=w3Oeb2ExWB08jJVY9S6WLCLnVS6ehOgCuXIg; ZDS=1.0|1560396733|mKvZaVc5TVGqr5okQNiEBCM1G97FoBF/yyqjUfEvB3YLzCv1M7/+vUxlFB55JaSTwuxLEliD0y1Vz6wrFz8few==; isg=BO7uMQSNP97y20u88khRhMJeKkJwR71PcQROlxi3CPGs-45VgH4E-ZU6syeyI6oB'
		},
		luckyNum: 0,
		users: []
	},
	getData: function (str) {
		return '{"method":"phone","group_sn":"' + str + '","sign":"4e912de2215b79fc23675d313f0dc018","phone":"","device_id":"","hardware_id":"","platform":0,"track_id":"1543893764|7dc68447f2a13210a0aa2868283fa4aaa44040e72747672556|febb3d751492b9b8a4339418b6deb6e0","weixin_avatar":"http://thirdqq.qlogo.cn/qqapp/101204453/642E8E48EC04337A8E07035EF65F9D1F/40","weixin_username":"\u4f0a\u4e36\u65e0\u6240\u6709","unionid":"fuck","latitude":"","longitude":""}'
		
	},
	getUrl: function (e) {
		var url = e.detail.value;
		console.log(url)
        if (url.indexOf('ele.me') !== -1) {
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
		var sn = (function () {
			var r, from, to;
			var url = _this.data.url;
            from = url.indexOf('&sn=');
            to = url.indexOf('&theme_id');
            if (from !== -1) {
                r = url.slice(from + 4, to)
            }

            // luckuy num
            _this.setData({
                luckyNum: 15
            });

			return r;
		})()
		
		if (sn) {
			this.setData({
				btnName: '...',
				btnDisabled: true
			});
			try {
                wx.request({
                    url: 'https://h5.ele.me/restapi/marketing/v2/promotion/weixin/642E8E48EC04337A8E07035EF65F9D1F',
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
                            res.data.promotion_records.forEach(i => {
                                let d = new Date(i.created_at * 1000)
                                i.time = d.getHours() + ':' + d.getMinutes()
                        })
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
			url: '',
			needHelp: true
		})
	}
})
