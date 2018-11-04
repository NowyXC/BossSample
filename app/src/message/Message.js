import React, {Component} from 'react';
import {
    Text,
    Image, 
    View,
    FlatList
    } from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation';

import MsgStyle from './../../styles/Message'


var JsonData = require('../../assets/json/messageListData.json');









class Message extends React.Component{
    constructor(props){
        super(props);

       this.state = {
           data : JsonData
       }
    }

    componentDidMount(){
        // this._flatList.scrollToOffset({animated: false, offset:68});
    }

    render(){
        return(
            <View style={MsgStyle.container}>
                {/* titlebar */}
                <View style={MsgStyle.titlebar}>
                    <View style={MsgStyle.titlebarBothSides}/>

                    <View style={MsgStyle.titleContainer}>
                        <View style={MsgStyle.titlebarContent}>
                            <View style={MsgStyle.titlebarContentLeft}>
                                <Text 
                                style={[
                                        MsgStyle.titlebarContentTxt,MsgStyle.titlebarContentTxtOnSelected
                                    ]}>
                                    聊天
                                </Text>
                                <View style={[MsgStyle.titlebarConntentUnreadPoint,{display:'none'}]}/>
                            </View>
                            <View style={MsgStyle.titlebarContentRight}>
                                <Text style={MsgStyle.titlebarContentTxt}>互动</Text>
                                <View style={[MsgStyle.titlebarConntentUnreadPoint,{display:'flex'}]}/>
                            </View>
                        </View>
                    </View>
                    
                    <Image 
                        source={
                            require("../../images/message/ic_action_notify.png")}
                        resizeMode='center'
                        style={MsgStyle.titlebarBothSides}
                    />
                </View>
                {/* 消息列表 */}
                <FlatList 
                    ref={(flatList)=> this._flatList = flatList}
                    style={MsgStyle.list}
                    data = { this.state.data}
                    ListHeaderComponent={this._header}
                    renderItem = { this._renderRow.bind(this)}
                    keyExtractor={(item,index) =>index.toString()}
                />
            </View>
        );
    }

    _header = () =>{
        return(
            <View style={MsgStyle.headerContainer}>
                {/* 搜索框 */}
                <View style={MsgStyle.headerSearchBar}>
                    <View style={MsgStyle.headerSearchBarContent}>
                        <Image
                            source={
                                require('../../images/common/ic_search_history.png')}
                            resizeMode='center'
                            style={MsgStyle.headerSearchBarImg}
                        />
                        <Text style={MsgStyle.headerSearchBarHint}>通过姓名或者公司名搜索联系人</Text>
                    </View>
                </View>
                
                <View style={MsgStyle.headerBottomLine}/>

                {/* 极速处理 */}
                <View style={MsgStyle.headerHandle}>
                    <Text style={MsgStyle.headerHandleContact}>联系人</Text>
                    <Text style={MsgStyle.headerHandleAll}>极速处理</Text>               
                </View>
            </View>
        );
    }

    _renderRow = ({item}) =>{
        return(
            <View style={MsgStyle.itemContainer}>
                <View style={MsgStyle.itemContent}>
                {/* 左：头像 */}
                <View style={MsgStyle.itemLeft}>
                    <Image style={MsgStyle.itemLeftImg}
                        source={require('../../images/avatar/avatar_1.png')}
                    />
                </View>
                {/* 中:消息 */}
                <View style={MsgStyle.itemMiddle}>
                    {/* 上:用户信息 */}
                    <View style={MsgStyle.itemMiddleUserInfo}>
                        <Text style={MsgStyle.itemMiddleUserName}>用户名称</Text>
                        <Text style={MsgStyle.itemMiddleUserDesc}>公司名称·职位</Text>
                    </View>
                    {/* 下:消息记录 */}
                    <Text style={MsgStyle.itemMiddleMessage}>未读消息</Text>
                </View>
                {/* 右:时间、未读  */}
                <View style={MsgStyle.itemRight}>
                    <Text style={MsgStyle.itemRightDate}>时间</Text>
                    <Text style={MsgStyle.itemRightUnread}>3</Text>
                </View>

                
                </View>
                <View style={MsgStyle.itemBottomLine}/>   
            </View>
            
        );
    }

}

export default Message;