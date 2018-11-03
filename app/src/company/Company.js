import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    } from 'react-native';


import CompanyStyle from './../../styles/Company';

var JsonData = require( '../../assets/json/companyListData.json');

class Company extends React.Component{

    constructor(props){
        super(props);

       this.state = {
           data : JsonData
       }
    }

    render(){
        return(
            <View style={CompanyStyle.container}>
                {/* title */}
                <View style={CompanyStyle.titlebar}>
                    <View style={CompanyStyle.titlebarImg}/>
                    <Text style={CompanyStyle.titlebarTab}>公司</Text>
                    <Image 
                        source={
                            require('../../images/common/ic_action_search.png')}
                        resizeMode='center'
                        style={CompanyStyle.titlebarImg}
                    />
                </View>
                {/* 筛选 */}
                <View style={CompanyStyle.filterbar}>
                    <View style={CompanyStyle.filterContent}>
                        <Text style={[CompanyStyle.filterText]}>融资</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {CompanyStyle.filterImg}
                            />
                    </View>
                    <View style={CompanyStyle.filterLineVertical}/>
                    <View style={CompanyStyle.filterContent}>
                        <Text style={[CompanyStyle.filterText]}>规模</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {CompanyStyle.filterImg}
                            />
                    </View>
                    <View style={CompanyStyle.filterLineVertical}/>
                    <View style={CompanyStyle.filterContent}>
                        <Text style={[CompanyStyle.filterText]}>行业</Text>
                        <Image source = {
                            require('../../images/arrow/ic_arrow_expand.png')}
                            resizeMode='center'
                            style = {CompanyStyle.filterImg}
                            />
                    </View>
                    
                </View>
                
                <View 
                    style={CompanyStyle.filterBottomLine}
                />

                {/* 列表 */}
                <FlatList style={CompanyStyle.list}
                    data = { this.state.data}
                    renderItem = { this._renderRow.bind(this)}
                    keyExtractor={(item,index) =>index.toString()}
                />
            </View> 
        );
    }

    _renderRow = ({item}) =>{
        return(
           <View style={CompanyStyle.itemContainer}>
                {/* 公司信息 */}
                <View style={CompanyStyle.itemCompanyInfo}>
                    <Image source={
                        require('../../images/common/ic_company_def.png')}
                        style={CompanyStyle.itemCompanyLogo}
                        />
                    <View style={CompanyStyle.itemCompanyInfoRight}>
                        <Text style={CompanyStyle.itemCompanyName}>公司名称</Text>
                        <Text style={CompanyStyle.itemCompanyAddress}>公司地址</Text>
                    </View>
                </View>
                {/* 公司标签 */}
                <View style={CompanyStyle.itemContent}>
                    <Text style={CompanyStyle.itemFinancingInfo}>融资信息</Text>
                    <Text style={CompanyStyle.itemCompanySize}>公司规模</Text>
                    <Text style={CompanyStyle.itemIndustryInfo}>行业信息</Text>
                </View>

                <View style={CompanyStyle.itemContentBottomLine}/>

                {/* 招聘岗位信息 */}
                <View style={CompanyStyle.itemRecruitment}>
                    <Text style={CompanyStyle.itemRecruitmentInfo} >热招：
                    <Text style={CompanyStyle.itemRecruitmentJob}>xxxxxxx</Text>等N个职位</Text>
                    <Image source={
                        require('../../images/arrow/ic_arrow_search.png')}
                        resizeMode='center'
                        style={CompanyStyle.itemRecruitmentArrow}/>
                </View>

           </View>
        );
    } 

}

export default Company;