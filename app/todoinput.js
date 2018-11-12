import React,{Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'

export default class ToDoInput extends Component{
  constructor(){
    super();
    this.state = {myInput:""}
  }

  handlePress=()=>{
    this.props.funcAdd(this.state.myInput)
    //清空输入框中的内容
    this.setState({myInput:""})
  }

  handleChangeText=(msg)=>{
    this.setState({myInput:msg})
  }

  render(){
    return <View>
      <Text>待做事项列表</Text>
      <TextInput onChangeText={this.handleChangeText} placeholder='请输入待做事项' value={this.state.myInput}>
      </TextInput>
      <Button title='add' onPress={this.handlePress}></Button>
    </View>
  }
}