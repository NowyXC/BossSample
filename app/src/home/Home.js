import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    FlatList} from 'react-native';

import HomeStyle from './../../styles/Home';


import JobItem from '../components/JobItem'

var JsonData = require( '../../assets/json/jobListData.json');


class Home extends React.Component{

    constructor(props){
        super(props);

       this.state = {
           data : JsonData
       }
    }
    
    render(){
        return(
            <View style={HomeStyle.container}>
                {/* title */}
                <View style={HomeStyle.titlebar}>
                    <Text style={HomeStyle.titlebarTab}>Android</Text>
                    <Image 
                        source={require('../../images/home/ic_f1_add.png')}
                        resizeMode='center'
                        style={HomeStyle.titlebarImg}
                    />
                    <View style={HomeStyle.titlebarLineVertical}/>
                    <Image 
                        source={
                            require('../../images/common/ic_action_search.png')}
                            resizeMode='center'
                            style={HomeStyle.titlebarImg}
                    />
                </View>
                {/* 筛选 */}
                <View style={HomeStyle.filterbar}>
                    <View style={HomeStyle.filterContent}>
                        <Text style={[HomeStyle.filterText]}>推荐</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {HomeStyle.filterImg}
                            />
                    </View>
                    <View style={HomeStyle.filterLineVertical}/>
                    <View style={HomeStyle.filterContent}>
                        <Text style={[HomeStyle.filterText]}>广州</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {HomeStyle.filterImg}
                            />
                    </View>
                    <View style={HomeStyle.filterLineVertical}/>
                    <View style={HomeStyle.filterContent}>
                        <Text style={[HomeStyle.filterText]}>公司</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {HomeStyle.filterImg}
                            />
                    </View>
                    <View style={HomeStyle.filterLineVertical}/>
                    <View style={HomeStyle.filterContent}>
                        <Text style={[HomeStyle.filterText]}>要求</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {HomeStyle.filterImg}
                            />
                    </View>
                </View>
                
                <View 
                    style={HomeStyle.filterBottomLine}
                />

                {/* 列表 */}
                <FlatList style={HomeStyle.list}
                    data = { this.state.data}
                    renderItem = { this._renderRow.bind(this)}
                    keyExtractor={(item,index) =>index.toString()}
                />
                {/* <Text onPress={()=>{
                        this.props.navigation.push('JobDetail')
                    }}>Home</Text>*/}
            </View> 
        );
    }

    _renderRow = ({item}) =>{
        return(
            <JobItem />
        );
    }
}

export default Home;