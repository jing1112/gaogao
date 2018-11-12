//创建一个自定义的组件
import React,{Component} from 'react';
import {Text} from 'react-native'
import Global from '../global'

export default class Demo19Component extends Component{
  render(){
    return <Text>Hello World {Global.baseUrl}</Text>
  }

}