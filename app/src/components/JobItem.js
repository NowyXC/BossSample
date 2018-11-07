import React,{Component} from 'react';  
import {
    View,
    Text,
    Image,
    StyleSheet} from 'react-native';  


export default class JobItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={Style.itemContainer}>
                <View style={Style.itemJobDesc}>                    
                <Text style={Style.itemJobName}>招聘岗位</Text>
                    <Text style={Style.itemSalary}>薪资</Text>
                </View>
                <View style={Style.itemCompanyDesc}>
                    <Text style={Style.itemCompanyName}>公司名称</Text>
                    <Text style={Style.itemCompanyType}>公司类型</Text>
                </View>

                 <View style={Style.itemContent}>
                    <Text style={Style.itemCompanyAddress}>公司地址</Text>
                    <Text style={Style.itemWorkExp}>工作经验</Text>
                    <Text style={Style.itemEducation}>学历</Text>
                </View>

                <View style={Style.itemRecruiterInfo}>
                    <Image 
                        source={require('../../images/avatar/avatar_1.png')}
                        style={Style.itemRecruiterImg}
                        />
                    <Text style={[Style.ItemRecruiterIsVip]}>V</Text>     
                    <Text style={Style.itemRecruiterName}>招聘者</Text>
                    <Text style={Style.itemRecruiterJob}> · 招聘者岗位</Text>
                    <View style={Style.itemFit}/>
                    <Text style={Style.itemIsNew}>新</Text>
                </View>
            </View>
        );
    }
}


const Style = StyleSheet.create({
    itemContainer:{
        height:140,
        flexDirection:'column',
        backgroundColor:'white',
        paddingLeft:16,
        paddingRight:16,
        paddingTop:12,
        paddingBottom:12,
        marginBottom:6
    },
    itemJobDesc:{
        flexDirection:'row',
        textAlignVertical:'center'
    },
    itemJobName:{
        fontWeight:'bold',
        fontSize:16,
        color:'#111'
    },
    itemSalary:{
        flex:1,
        textAlign:'right',
        color:'#2bb1b4'
    },
    itemCompanyDesc:{
        flexDirection:'row',
        textAlignVertical:'center',
        marginTop:6
    },
    itemCompanyName:{
        fontSize:14,
        color:'#111'
    },
    itemCompanyType:{
        fontSize:14,
        color:'#111',
        marginLeft:6
    },

    itemContent:{
        flexDirection:'row',
        marginTop:10,
    },
    itemCompanyAddress:{
        fontSize:12,
        color:'#a7a7a7',
        fontFamily:'KaiTi',
        backgroundColor:'#f8f8f8',
        borderRadius:4,
        paddingLeft:6,
        paddingRight:6,
        textAlignVertical:'center'        
    },
    itemWorkExp:{
        fontSize:12,
        color:'#a7a7a7',
        fontFamily:'KaiTi',
        backgroundColor:'#f8f8f8',
        borderRadius:4,
        paddingLeft:6,
        paddingRight:6,
        textAlignVertical:'center',
        marginLeft:10 
    },
    itemEducation:{
        fontSize:12,
        color:'#a7a7a7',
        fontFamily:'KaiTi',    
        backgroundColor:'#f8f8f8',
        borderRadius:4,
        paddingLeft:6,
        paddingRight:6,
        textAlignVertical:'center',
        marginLeft:10 
    },

    itemRecruiterInfo:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:14
    },
    itemRecruiterImg:{
        width:24,
        height:24,
        borderRadius:12
    },
    ItemRecruiterIsVip:{
        fontSize:8,
        color:'white',
        backgroundColor:'#53cac3',
        width:12,
        height:12,
        borderRadius:6,
        borderColor:'white',
        borderWidth:1,
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'flex-end',
        marginLeft:-10,
    },
    itemRecruiterName:{
        fontSize:12,
        color:'#333',
        marginLeft:6
    },
    itemRecruiterJob:{
        fontSize:12,
        color:'#333'
    },
    itemFit:{
        flex:1
    },
    itemIsNew:{
        height:20,
        width:20,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:12,
        color:'white',
        borderRadius:10,
        backgroundColor:'red'
    },
});