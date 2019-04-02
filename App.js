/**
 * Sample React Native App
 * https://github.com/KevinChenJin/ReactNativeDemo.git
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        const [a, b, c, d, e] = 'hello';
        let {length: len} = 'hellos';
        let {toString: s} = 124;
        for (let codePoint of 'foo') {
            console.log("字符串的扩展：", codePoint);
        }
        let template = `
            <ul>
                <% for(let i=0; i < data.supplies.length; i++) { %>
            <li><%= data.supplies[i] %></li>
            <% } %>
            </ul>
        `

        console.log("模板编译：",template);
        console.log("数值的解构赋值:", s);
        console.log("字符串的解构赋值", len);
        console.log("字符串的解构赋值分别是", a + b + c + d + e);
        console.log("数值中二进制是：", Number('0B111').toString());
        console.log("数值中八进制是：", Number('0O10').toString());

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
