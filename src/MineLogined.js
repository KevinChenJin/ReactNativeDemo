/***
 *   @author:SJ
 *   @Date:2019/4/1
 *   https://github.com/KevinChenJin/ReactNativeDemo.git
 *   Name: demo031801
 *   @Time:8:53
 **/

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
} from 'react-native';

export default class MineLogined extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{height: 200}}
                                 source={require('./img/mine_unlogined.png')}>
                    <View style={styles.headPageTitleLayout}>
                        <View style={styles.headMineLayout}>
                            <Text style={styles.headMineTitle}>我的</Text>
                        </View>
                        <View>
                            <Image style={styles.headMessageImage}
                                   source={require('./img/mine_message.png')}/>
                        </View>
                    </View>
                    <View style={styles.headLoginLayout}>
                        <Image style={styles.userRadiusImage}
                               roundAsCircle={true}
                               resizeMode={'stretch'}
                               source={require('./img/mine_bear.jpg')}></Image>
                        <Text style={styles.usernameText}>小熊</Text>
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
                <View style={styles.mineMallOutLayout}>
                    <View style={styles.mineMallInLayout}>
                        <Text style={styles.otherText}>我的商城</Text>
                    </View>
                    <View>
                        <Text style={styles.moreText}>更多</Text>
                    </View>
                    <View>
                        <Image style={styles.arrowImage} source={require('./img/mine_more.png')}></Image>
                    </View>
                </View>
                <ScrollView>
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
    userRadiusImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    mineMallOutLayout: {
        height: 30,
        flexDirection: 'row',
    },
    mineMallInLayout:{
        flex:1,
    },
    usernameText: {
        marginTop: 45,
        marginLeft: 10,
        fontSize: 20,
        color: '#ffffff',
    },
    moreText: {
        marginTop: 10,
        fontSize: 16,
        color: '#858c99',
    },
    arrowImage: {
        marginTop: 13,
        marginRight:10,
        width: 16,
        height: 16,
    },
    headLoginLayout: {
        marginTop: 50,
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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