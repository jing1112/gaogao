import React,{Component} from 'react'
import {View,FlatList} from 'react-native'
import ToDoItem from './todoitem'

export default class ToDoList extends Component{
  constructor(){
    super()
    this.state = {list:[]}
  }

  showItem=(info)=>{
    return <ToDoItem myContent={info.item}></ToDoItem>
  }

  //当通过属性传来的值变化时，保存在状态中
  componentWillReceiveProps(){
    this.setState({list:this.props.myList})
  }

  render(){
    return <FlatList 
    extraData={this.state}
    renderItem={this.showItem}
    data={this.state.list}></FlatList>
  }
}