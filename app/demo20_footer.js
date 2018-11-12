//创建一个自定义的组件
import React,{Component} from 'react';
import {Text,ScrollView,View} from 'react-native'

export default class Demo20Component extends Component{
  render(){
    return <View style={{flex:1}}>
       <ScrollView></ScrollView>
       <View>
         <Text>页脚</Text>
       </View>
      </View>
  }
  C:\xampp\htdocs\framework\4_RN\myapp\app\components\demo20_footer.js
}