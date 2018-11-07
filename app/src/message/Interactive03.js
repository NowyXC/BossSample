import React, {Component} from 'react';
import {
    Text,
    Image, 
    View,
    FlatList,
    StyleSheet,
    } from 'react-native';



import InteractiveStyle from '../../styles/Interactive';
import JobItem from '../components/JobItem';
import LineHorizontal from './../components/LineHorizontal';


var JsonData = require( '../../assets/json/jobListData.json');

export default class Interactive03 extends React.Component{

    constructor(props){
        super(props);

       this.state = {
           data : JsonData
       }
    }

    render(){
        return(
            <View style={InteractiveStyle.container}>
                 {/* 列表 */}
                 <FlatList style={InteractiveStyle.list}
                    data = { this.state.data}
                    renderItem = { this._renderRow.bind(this)}
                    keyExtractor={(item,index) =>index.toString()}
                />
            </View>
        );
    }

    _renderRow = ({item}) =>{
        return(
            <View style={InteractiveStyle.itemContainer}>
                <JobItem />
            </View>
        );
    }

}
