import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class ToDoItem extends Component{
  handlePress=()=>{}

  render(){
    return <View>
      <Button title="删除" onPress={this.handlePress}></Button>
      <Text>{this.props.myContent}</Text>
    </View>
  }
}