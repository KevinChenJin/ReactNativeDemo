/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/Login';
import Register from './src/Register';
import MineLogined from './src/MineLogined';
import MineUnLogined from './src/MineUnLogined';
import {createAppContainer} from 'react-navigation';
import {AppStackNavigator} from "./navigators/AppNavigators";

const AppStackNavigatorContainer=createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
