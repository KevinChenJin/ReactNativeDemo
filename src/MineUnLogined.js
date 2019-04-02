/***
 *   @author:SJ
 *   @Date:2019/4/1
 *   https://github.com/KevinChenJin/ReactNativeDemo.git
 *   Name: demo031801
 *   @Time:8:59
 **/

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Button,
} from 'react-native';

export default class MineUnLogined extends Component {

    componentWillMount() {
        console.log("RN生命周期：开始加载");
    }

    componentDidMount() {
        console.log("RN生命周期：加载完成");
    }

    componentWillUnmount() {
        console.log("RN生命周期：卸载完成");
    }

    onLayout = event => {
        let {width, height} = event.nativeEvent.layout
        console.log("view width:" + width);
        console.log("view height:" + height);
    }

    render() {
        var a = 1 / 10;
        for (let i = 0; i < 100; i++) {
            console.log("变量的值i：" + i);
        }
        console.log("变量的值a：" + a);

        const {navigation} = this.props;

        return (
            <View style={styles.container} onLayout={this.onLayout}>
                <ImageBackground style={{height: 200}}
                                 source={require('./img/mine_unlogined.png')}>
                    <View style={styles.headPageTitleLayout}>
                        <View style={styles.headMineLayout}>
                            <Text style={styles.headMineTitle}>我的</Text>
                        </View>
                        <View>
                            <Image style={styles.headMessageImage} source={require('./img/mine_message.png')}/>
                        </View>
                    </View>
                    <View style={styles.headLoginLayout}>
                        <TouchableOpacity activeOpacity={.5}>
                            <View style={styles.headLoginImage}>
                                <Button
                                    title={'登录'}
                                    onPress={() => {
                                        navigation.navigate('Login');
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5}>
                            <View style={styles.headRegisterImage}>
                                <Text style={styles.headRegisterText}
                                      onPress={navigation.navigate('Register')}
                                >注册</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.homeSceneLayout}>
                    <View style={styles.homeLayout}>
                        <Image style={styles.homeImage} source={require('./img/mine_home.png')}/>
                        <Text style={styles.homeText}>我的家庭</Text>
                    </View>
                    <View style={styles.sceneLayout}>
                        <Image style={styles.sceneImage} source={require('./img/mine_scene.png')}/>
                        <Text style={styles.sceneText}>我的场景</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.otherText}>其他</Text>
                </View>
                <ScrollView>
                    <View style={styles.otherLayout}>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_other_virtual.png')}></Image>
                            <Text style={styles.otherItemText}>虚拟体验</Text>
                        </ImageBackground>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_other_share.png')}></Image>
                            <Text style={styles.otherItemText}>分享</Text>
                        </ImageBackground>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_other_setting.png')}></Image>
                            <Text style={styles.otherItemText}>设置</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.otherLayout}>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_mall_order.png')}></Image>
                            <Text style={styles.otherItemText}>订单</Text>
                        </ImageBackground>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_mall_coupon.png')}></Image>
                            <Text style={styles.otherItemText}>优惠券</Text>
                        </ImageBackground>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_mall_shoppingcart.png')}></Image>
                            <Text style={styles.otherItemText}>购物车</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.otherLayout}>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_mall_point.png')}></Image>
                            <Text style={styles.otherItemText}>积分</Text>
                        </ImageBackground>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_mall_coupon.png')}></Image>
                            <Text style={styles.otherItemText}>优惠券</Text>
                        </ImageBackground>
                        <ImageBackground style={styles.otherLayout1}>
                            <Image style={styles.otherLayout2}
                                   source={require('./img/mine_mall_privilege.png')}></Image>
                            <Text style={styles.otherItemText}>我的特权</Text>
                        </ImageBackground>
                    </View>
                </ScrollView>

                <View style={styles.bottomLayout}>
                    <View style={styles.bottomItemLayout}>
                        <Image style={styles.bottomItemLayout1}
                               source={require('./img/rn_home_tab_unclicked.png')}></Image>
                        <Text style={styles.bottomItemText}>家电</Text>
                    </View>
                    <View style={styles.bottomItemLayout}>
                        <Image style={styles.bottomItemLayout1}
                               source={require('./img/rn_maill_tab_unclicked.png')}></Image>
                        <Text style={styles.bottomItemText}>商城</Text>
                    </View>
                    <View style={styles.bottomItemLayout}>
                        <Image style={styles.bottomItemLayout1}
                               source={require('./img/rn_find_tab_unclicked.png')}></Image>
                        <Text style={styles.bottomItemText}>发现</Text>
                    </View>
                    <View style={styles.bottomItemLayout}>
                        <Image style={styles.bottomItemLayout1}
                               source={require('./img/rn_me_tab_clicked.png')}></Image>
                        <Text style={styles.bottomItemText}>我的</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ECF4FD',
    },
    headPageTitleLayout: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headMineLayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headMineTitle: {
        fontSize: 20,
        marginLeft: 40,
        color: '#ffffff',
    },
    headMessageImage: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    headLoginLayout: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headLoginImage: {
        width: 100,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 8,//边框圆角半径
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headLoginText: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 16,
        color: '#404657',
    },
    headRegisterImage: {
        width: 100,
        height: 40,
        backgroundColor: '#00AEFF',
        borderRadius: 8,//边框圆角半径
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headRegisterText: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 16,
        color: '#ffffff',
    },
    homeSceneLayout: {
        marginTop: 30,
        flexDirection: 'row',
    },
    homeLayout: {
        flex: 1,
        height: 60,
        backgroundColor: '#F7FBFF',
        borderRadius: 5,
        marginLeft: 10,
        flexDirection: 'row',
    },
    homeImage: {
        marginTop: 18,
        marginLeft: 10,
        width: 24,
        height: 24,
    },
    homeText: {
        marginTop: 18,
        marginLeft: 5,
        fontSize: 16,
        color: '#404657',
    },
    sceneLayout: {
        flex: 1,
        height: 60,
        backgroundColor: '#F7FBFF',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
    },
    sceneImage: {
        marginTop: 18,
        marginLeft: 10,
        width: 24,
        height: 24,
    },
    sceneText: {
        marginTop: 18,
        marginLeft: 5,
        fontSize: 16,
        color: '#404657',
    },
    otherText: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 15,
        color: '#404657',
    },
    otherLayout: {
        marginTop: 15,
        flexDirection: 'row',
    },
    otherLayout1: {
        flex: 1,
        height: 125,
        backgroundColor: '#F7FBFF',
        borderRadius: 8,//边框圆角半径
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otherLayout2: {
        width: 40,
        height: 40,
    },
    otherItemText: {
        color: '#404657',
        fontSize: 15,
    },
    bottomLayout: {
        marginTop: 48,
        flexDirection: 'row',
        backgroundColor: '#F7FBFF',
    },
    bottomItemLayout: {
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomItemLayout1: {
        width: 25,
        height: 25,
    },
    bottomItemText: {
        color: '#404657',
        fontSize: 12,
    },
});