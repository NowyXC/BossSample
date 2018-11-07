import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    TouchableWithoutFeedback 
    } from 'react-native';

import {
    createMaterialTopTabNavigator,NavigationActions 
    } from 'react-navigation';


import NavigationService from '../components/Navigation/NavigationService'

import Message from './Message';
import Interactive from './Interactive';
import MsgTabStyle from '../../styles/MsgTabNavigator';

var MaterialTopTabNavigator = createMaterialTopTabNavigator({
        Message:{
            screen:Message,
        },
        Interactive:{
            screen:Interactive,
        }
    },{
        initialRouteName: 'Message',
        backBehavior:'none',
        lazy:true,
        tabBarOptions:{
            showIcon:false,
            labelStyle: {
                fontSize: 12,
                color:'#333'
            },
            tabStyle: {
                width: 80,
                height:40,
            },
            style: {
                height:0,
                backgroundColor: 'white',
                elevation: 0,
                shadowColor: 'white',
                shadowOpacity: 0.0,
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
            },
            indicatorStyle:{
                height:0
            }
        }
    }
);

export default class MsgTabNavigator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            routeIndex : 0
        }
    }

    render(){
        return(
            <View style={MsgTabStyle.container}>
                <View style={MsgTabStyle.titlebar}>
                    <View style={MsgTabStyle.titlebarBothSides}/>

                    <View style={MsgTabStyle.titleContainer}>
                        <View style={MsgTabStyle.titlebarContent}>
                            <TouchableWithoutFeedback
                              onPress={()=>{
                                if(this.state.routeIndex != 0){
                                    this.setState({routeIndex:0});
                                    NavigationService.navigate('Message',null);
                                    }
                                }}  
                            >
                            <View style={[MsgTabStyle.titlebarContentLeft,
                                this.state.routeIndex == 0 ?
                                MsgTabStyle.titlebarContentOnSelected:
                                MsgTabStyle.titlebarContentOnUnSelected
                                ]}
                                >
                                <Text 
                                    style={[MsgTabStyle.titlebarContentTxt,
                                        this.state.routeIndex == 0 ?
                                        MsgTabStyle.titlebarContentTxtOnSelected
                                        :
                                        MsgTabStyle.titlebarContentTxtOnUnSelected
                                    ]}
                                    >
                                    聊天
                                 </Text>

                                <View style={[MsgTabStyle.titlebarConntentUnreadPoint,{display:'none'}]}/>
                            </View>

                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                              onPress={()=>{
                                if(this.state.routeIndex != 1){
                                    this.setState({routeIndex:1});
                                    NavigationService.navigate('Interactive',null);
                                    }
                                }}  
                                >
                                <View style={[MsgTabStyle.titlebarContentRight,
                                    this.state.routeIndex == 1 ?
                                    MsgTabStyle.titlebarContentOnSelected:
                                    MsgTabStyle.titlebarContentOnUnSelected
                                    ]}>
                                     <Text style={      [MsgTabStyle.titlebarContentTxt,
                                        this.state.routeIndex == 1 ?
                                        MsgTabStyle.titlebarContentTxtOnSelected
                                        :
                                        MsgTabStyle.titlebarContentTxtOnUnSelected
                                        ]}
                                       
                                    >互动</Text>
                                     <View style={[MsgTabStyle.titlebarConntentUnreadPoint,{display:'flex'}]}/>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>       
                    <Image source={
                            require("../../images/message/ic_action_notify.png")}
                            resizeMode='center'
                            style={MsgTabStyle.titlebarBothSides}
                         />
                </View>

                <MaterialTopTabNavigator
                    ref={tabNavRef => {
                        NavigationService.setTopLevelNavigator(tabNavRef);
                      }}
                    onNavigationStateChange={(prevNav, nav, action) => {
                        // alert(nav.routes[nav.index].routeName === 'Test01');
                        if(nav.routes[nav.index].routeName === 'Message'){
                            this.setState({routeIndex:0});
                        }else{
                            this.setState({routeIndex:1});
                        }
                        routes = nav.routes;
                    }}
                />
            </View>
        );
    }
}