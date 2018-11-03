import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    FlatList} from 'react-native';

import HomeStyle from './../../styles/Home';

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
            <View style={HomeStyle.itemContainer}>
                <View style={HomeStyle.itemJobDesc}>                    
                <Text style={HomeStyle.itemJobName}>招聘岗位</Text>
                    <Text style={HomeStyle.itemSalary}>薪资</Text>
                </View>
                <View style={HomeStyle.itemCompanyDesc}>
                    <Text style={HomeStyle.itemCompanyName}>公司名称</Text>
                    <Text style={HomeStyle.itemCompanyType}>公司类型</Text>
                </View>

                 <View style={HomeStyle.itemContent}>
                    <Text style={HomeStyle.itemCompanyAddress}>公司地址</Text>
                    <Text style={HomeStyle.itemWorkExp}>工作经验</Text>
                    <Text style={HomeStyle.itemEducation}>学历</Text>
                </View>

                <View style={HomeStyle.itemRecruiterInfo}>
                    <Image 
                        source={require('../../images/avatar/avatar_1.png')}
                        style={HomeStyle.itemRecruiterImg}
                        />
                    <Text style={[HomeStyle.ItemRecruiterIsVip]}>V</Text>     
                    <Text style={HomeStyle.itemRecruiterName}>招聘者</Text>
                    <Text style={HomeStyle.itemRecruiterJob}> · 招聘者岗位</Text>
                </View>
            </View>
        );
    }
}

export default Home;