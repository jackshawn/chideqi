import React, {Component} from 'react';

import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';

export default class App extends Component {
    state = {
        result: [],
        showResult: false,
        text: '',
        luckNum: 0,
        curNum: 0,
        sn: undefined
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* 输入框 */}
                <View style={{flex: 9, display: this.state.showResult ? 'none' : 'flex'}}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={{
                            borderRadius: 2,
                            borderColor: '#509fe8',
                            borderWidth: 1,
                            margin: 20,
                            flex: 1,
                            padding: 10,
                            textAlignVertical: 'top'
                        }}
                        placeholder="输入饿了么红包链接地址"
                        multiline={true}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                {/* 查询结果 */}
                <View style={{flex: 9, display: this.state.showResult ? 'flex' : 'none'}}>
                    <Text style={{fontSize: 48, lineHeight: 72, color: '#3290e8', fontWeight: 'bold', paddingLeft: 10}}
                          onPress={() => {
                              this.setState({
                                  showResult: false
                              })
                          }}>
                        {this.state.curNum} / {this.state.luckNum}
                    </Text>
                    <ScrollView>
                        {this.state.result.map(user => {
                            return (

                                <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
                                    <Image source={{uri: user.sns_avatar}}
                                           style={{width: 40, height: 40, borderRadius: 20}}/>
                                    <Text style={{
                                        paddingLeft: 5,
                                        fontSize: 18,
                                        lineHeight: 40,
                                        fontWeight: user.is_lucky ? 'bold' : 'normal',
                                        color: user.is_lucky ? '#3290e8' : 'inherit'
                                    }}>
                                        {user.sns_username} {new Date(user.created_at).toString().substr(16, 8)}
                                        ￥{user.amount}
                                    </Text>
                                </View>
                            )
                        })}
                        <Text style={{fontSize: 18, lineHeight: 36, textAlign: 'center', color: '#3290e8'}}
                              onPress={() => {
                                  this.setState({
                                      showResult: false
                                  })
                              }}>
                            back
                        </Text>
                    </ScrollView>
                </View>

                {/* 查询按钮 */}
                <View style={{flex: 1, padding: 20}}>
                    <Button
                        onPress={() => {
                            const url = this.state.text;
                            if(url && url.indexOf('ele.me') !== -1) {
                                const from = url.indexOf('&sn=');
                                const to = url.indexOf('&theme_id');
                                const luckyNum = url.slice(url.indexOf('&lucky_number=') + 14, url.indexOf('&track_id'));
                                const getBody = str => '{"method":"phone","group_sn":"' + str + '","sign":"4e912de2215b79fc23675d313f0dc018","phone":"","device_id":"","hardware_id":"","platform":0,"track_id":"1509610361|d047555ab922ad0017b8d3089174e214cdaf88144d5c3f2cb9|b9f05b492a4754c71f984a0492652649","weixin_avatar":"http://q.qlogo.cn/qqapp/101204453/642E8E48EC04337A8E07035EF65F9D1F/40","weixin_username":"\u4f0a\u4e36\u65e0\u6240\u6709","unionid":"fuck"}'

                                let sn = undefined;
                                if(from !== -1) {
                                    sn = url.slice(from + 4, to)
                                    this.setState({
                                        luckNum: luckyNum
                                    });
                                    fetch('https://restapi.ele.me/marketing/promotion/weixin/642E8E48EC04337A8E07035EF65F9D1F', {
                                        method: 'POST',
                                        headers: {
                                            'Origin': 'https://h5.ele.me',
                                            'Accept-Language': 'zh-CN,zh;q=0.8',
                                            'User-Agent': 'MicroMessenger Client',
                                            'Content-Type': 'application/json',
                                            'Accept': '*/*',
                                            'Referer': 'https://h5.ele.me/hongbao/',
                                            'X-Shard': 'eosid=3014974170551246000',
                                            'Cookie': 'ubt_ssid=xc0zu3vnw3pckza0c0r1fswe4kwve83h_2017-11-02; perf_ssid=8rldm86hl1qbb0jjbcmbvvflzxekqzjc_2017-11-02; _utrace=8bb8b70ae0c1ad1a38b295cf20d7d97b_2017-11-02; eleme__ele_me=408cb6e4447104b9b2af12dfbb330be1%3A2e5c5e6dc1afb137d7b004aaccc90af32761f9b7; track_id=1509610361%7Cd047555ab922ad0017b8d3089174e214cdaf88144d5c3f2cb9%7Cb9f05b492a4754c71f984a0492652649; snsInfo=%7B%22city%22%3A%22%22%2C%22eleme_key%22%3A%224e912de2215b79fc23675d313f0dc018%22%2C%22figureurl%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F30%22%2C%22figureurl_1%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F50%22%2C%22figureurl_2%22%3A%22http%3A%2F%2Fqzapp.qlogo.cn%2Fqzapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F100%22%2C%22figureurl_qq_1%22%3A%22http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F40%22%2C%22figureurl_qq_2%22%3A%22http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F100%22%2C%22gender%22%3A%22%E7%94%B7%22%2C%22is_lost%22%3A0%2C%22is_yellow_vip%22%3A%220%22%2C%22is_yellow_year_vip%22%3A%220%22%2C%22level%22%3A%220%22%2C%22msg%22%3A%22%22%2C%22nickname%22%3A%22%E4%BC%8A%E4%B8%B6%E6%97%A0%E6%89%80%E6%9C%89%22%2C%22openid%22%3A%22642E8E48EC04337A8E07035EF65F9D1F%22%2C%22province%22%3A%22%E6%B1%9F%E8%8B%8F%22%2C%22ret%22%3A0%2C%22vip%22%3A%220%22%2C%22year%22%3A%221991%22%2C%22yellow_vip_level%22%3A%220%22%2C%22name%22%3A%22%E4%BC%8A%E4%B8%B6%E6%97%A0%E6%89%80%E6%9C%89%22%2C%22avatar%22%3A%22http%3A%2F%2Fq.qlogo.cn%2Fqqapp%2F101204453%2F642E8E48EC04337A8E07035EF65F9D1F%2F40%22%7D'
                                        },
                                        body: getBody(sn)
                                    })
                                        .then(r => r.json())
                                        .then(r => {
                                            this.setState({
                                                result: r.promotion_records,
                                                showResult: true,
                                                curNum: r.promotion_records.length,
                                            })
                                        })
                                        .catch((err) => {
                                            alert(err);
                                        });
                                }
                            } else {
                                alert('输入连接地址有误！')
                            }
                        }}
                        title="查   询"
                        color="#3290e8"
                    />
                </View>
            </View>
        );
    }
}
