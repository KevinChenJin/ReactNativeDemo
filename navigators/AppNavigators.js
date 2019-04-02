/***
 *   @author:SJ
 *   @Date:2019/4/1
 *   https://github.com/KevinChenJin/ReactNativeDemo.git
 *   Name: demo031801
 *   @Time:15:04
 **/
import {createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator,createDrawerNavigator,DrawerItems} from 'react-navigation'
import React from 'react';
import {Button, Platform,ScrollView,SafeAreaView} from 'react-native';

import Login from '../src/Login';
import MineUnLogined from '../src/MineUnLogined';
import MineLogined from '../src/MineLogined';
import Register from '../src/Register';

//页面跳转
export const AppStackNavigator = createStackNavigator({
    MineUnLogined: {
        screen: MineUnLogined,
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: '登录'//动态配置navigationOption
        })
    },
    Register: {
        screen: Register,
        navigationOptions: ({navigation}) => ({
            title: '注册'//动态配置navigationOption
        })
    },
    MineLogined: {
        screen: MineLogined,
        navigationOptions: {//在这里定义每个页面的导航数据，静态配置
            title: 'MineLogined'
        },
    }
});