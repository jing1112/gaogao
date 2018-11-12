/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Demo15Component from './app/components/demo15_switch'
import Demo16Login from './app/components/demo16_login'
import Demo16Main from './app/components/demo16_main'
import {createStackNavigator} from 'react-navigation'
import Demo17List from './app/components/demo17_list'
import Demo17Detail from './app/components/demo17_detail'
import ToDoBox from './app/components/todobox'
import Demo20Component from './app/components/demo20_footer'

// 配置路由词典
var MyNavigator = createStackNavigator({
  box:{
    screen:ToDoBox
  },
  list:{
    screen:Demo17List
  },
  detail:{
    screen:Demo17Detail
  },
  login:{
    screen:Demo16Login
  },
  main:{
    screen:Demo16Main
  }
})

AppRegistry.registerComponent('myapp', () => Demo20Component);
