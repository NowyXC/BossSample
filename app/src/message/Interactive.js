import React, {Component} from 'react';
import {
    Text,
    Image, 
    View,
    FlatList,
    StyleSheet,
    } from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation';


import InteractiveStyle from '../../styles/Interactive';
import JobItem from '../components/JobItem';
import LineHorizontal from './../components/LineHorizontal';

import Interactive01 from './Interactive01';
import Interactive02 from './Interactive02';
import Interactive03 from './Interactive03';

var JsonData = require( '../../assets/json/jobListData.json');



const TopTabNavigator = createMaterialTopTabNavigator({
    Interactive01:{
        screen:Interactive01,
        navigationOptions:{
            tabBarLabel: '对我感兴趣'
        }
    },
    Interactive02:{
        screen:Interactive02,
        navigationOptions:{
            tabBarLabel: '看过我'
        }
    },
    Interactive03:{
        screen:Interactive03,
        navigationOptions:{
            tabBarLabel: '新职业'
        }
    },
},{
    initialRouteName: 'Interactive01',
    backBehavior:'none',
    tabBarOptions:{
        showIcon:false,
        activeTintColor:'#111',
        inactiveTintColor:'#a7a7a7',
        labelStyle: {
            fontSize: 12,
            color:'#111'
        },
        tabStyle: {
            width: 96,
            height:40,
        },
        style: {
            // height:0,
            backgroundColor: 'white',
            elevation: 0.2,
            shadowColor: 'white',
            shadowOpacity: 0.0,
            shadowRadius: 1,
            shadowOffset: {
            height: 1,
            },
        },
        indicatorStyle:{
            height:0
        }
    }
}
);



export default class Interactive extends React.Component{

    constructor(props){
        super(props);

       this.state = {
           data : JsonData
       }
    }

    render(){
        return(
            <TopTabNavigator />
            // <View style={InteractiveStyle.container}>
            //     <View></View>
            //      {/* 列表 */}
            //      <FlatList style={InteractiveStyle.list}
            //         data = { this.state.data}
            //         renderItem = { this._renderRow.bind(this)}
            //         keyExtractor={(item,index) =>index.toString()}
            //     />
               

            // </View>
        );
    }

    _renderRow = ({item}) =>{
        return(
            <View style={InteractiveStyle.itemContainer}>
                <JobItem />
                <LineHorizontal style={InteractiveStyle.itemDivider}/>
                <Text style={InteractiveStyle.itemBottomTxt}>查看了您</Text>
            </View>
        );
    }

}







// export default class Interactive extends React.Component{

//     render(){
//         return(
//             <MaterialTopTabNavigator 
//             onNavigationStateChange={(prevNav, nav, action) => {
//                 alert(nav.routes[nav.index].routeName === 'Test01');
//                 console.log('prevNav=',prevNav);
//                 console.log('nav=',nav);
//                 console.log('action=',action);
//                 routes = nav.routes;
//             }}
//             />
//         );
//     }
// }

