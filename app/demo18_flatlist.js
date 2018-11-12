import React,{Component} from 'react';
import {FlatList,Text} from 'react-native'

export default class Demo18Component extends Component{
  constructor(){
    super();
    var tmpList = []
    for(var i=0;i<50;i++){
      tmpList.push("商品"+i)
    }
    this.state = {
      list:tmpList
    }
  }

  showItem=(info)=>{
    return <Text>{info.item}</Text>
  }

  handleEndReached=()=>{
    //上滑到底部时，执行的处理函数，比如请求下一页的数据；在此模拟加载10条数据
    var nowList = this.state.list;
    var length = nowList.length
    for(var i=0;i<10;i++){
      nowList.push("商品"+(length+i))
    }
    this.setState({list:nowList});
  }

  render(){
    return <FlatList 
    onEndReached={this.handleEndReached}
    renderItem={this.showItem}
    data={this.state.list}></FlatList>
  }
}