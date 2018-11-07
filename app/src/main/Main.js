import React, {Component} from 'react';
import {Text, View} from 'react-native';


import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import Home from './../home/Home';
import Company from './../company/Company';
import Message from './../message/Message';
import MsgTabNavigator from './../message/MsgTabNavigator'
import Mine from './../mine/Mine';



import TabBarItem from './../components/TabItem';

import JobDetail from './../home/JobDetail';



class Main extends React.Component{

    render(){
        return <MainStackNavigator />;
    }
}
                                             
                                                    
const MainTabNavigator = createBottomTabNavigator({  
    Home:{ 
        screen:Home,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'职位',
        tabBarIcon:({focused,tintColor}) => (
            <TabBarItem
                // tintColor={tintColor}
                focused={focused}
                normalImage={require('./../../images/main/ic_main_tab_find_nor.png')}
                selectedImage={require('./../../images/main/ic_main_tab_find_pre.png')}
            />
            )
         }),
    },
    Company:{
        screen:Company,
        navigationOptions:({navigation}) => ({
        tabBarLabel:'公司',
        tabBarIcon:({focused,tintColor}) => (
            <TabBarItem
                // tintColor={tintColor}
                focused={focused}
                normalImage={require('./../../images/main/ic_main_tab_company_nor.png')}
                selectedImage={require('./../../images/main/ic_main_tab_company_pre.png')}
            />
            )
         }),
    },
    Message:{
        screen:MsgTabNavigator,
        navigationOptions:({navigation}) => ({
        tabBarLabel:'消息',
        tabBarIcon:({focused,tintColor}) => (
            <TabBarItem
                // tintColor={tintColor}
                focused={focused}
                normalImage={require('./../../images/main/ic_main_tab_contacts_nor.png')}
                selectedImage={require('./../../images/main/ic_main_tab_contacts_pre.png')}
            />
            )
         }),
    },
    Mine:{
        screen:Mine,
        navigationOptions:({navigation}) => ({
        tabBarLabel:'职位',
        tabBarIcon:({focused,tintColor}) => (
            <TabBarItem
                // tintColor={tintColor}
                focused={focused}
                normalImage={require('./../../images/main/ic_main_tab_my_nor.png')}
                selectedImage={require('./../../images/main/ic_main_tab_my_pre.png')}
            />
            )
         }),
    }
    }, {    
        swipeEnabled:false, //不允许滑动切换Tab
        animationEnabled:false,
        lazy:true,//允许懒加载
        tabBarOptions:{
            activeTintColor:'#53cac3',
            inactiveTintColor:'#999999',
            style:{
                backgroundColor:'#ffffff',
                },
            labelStyle: {
                fontSize: 11, // 文字大小
                fontFamily: 'SimHei',
            },
        }
      
}); 


const MainStackNavigator = createStackNavigator (
    {
      Main: {
        screen:MainTabNavigator
      },
      JobDetail:{
        screen:JobDetail
      }
    },
    {
      initialRouteName:'Main',
      headerMode:'none'
    }
    );


export default Main;