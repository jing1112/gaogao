import React,{Component} from 'react'
import {View} from 'react-native'
import ToDoList from './todolist'
import ToDoInput from './todoinput'

export default class ToDoBox extends Component{
  constructor(){
    super();
    this.state = {list:[]}
  }

  addToList=(msg)=>{
    console.log('todobox介绍到的数据是'+msg);
    var nowList = this.state.list;
    nowList.unshift(msg);
    this.setState({list:nowList});
  }

  render(){
    return <View>
      <ToDoInput funcAdd={this.addToList}></ToDoInput>
      <ToDoList myList={this.state.list}></ToDoList>
    </View>
  }
}