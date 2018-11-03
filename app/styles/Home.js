import {Platform, StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
      },
    titlebar:{
        flexDirection:'row',
        alignItems:'center',
        height:44,
        backgroundColor:'#53c9c3',
        paddingLeft:16
    },
    titlebarTab:{
        flex:1,
        color:'white',
        fontSize:16,
        fontWeight:'bold'

    },
    titlebarImg:{
        height:44,
        width:44,
    },
    titlebarLineVertical:{
        height:28,
        width:1,
        backgroundColor:'white',
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    filterbar:{
        flexDirection:'row',
        backgroundColor:'white',
        height:40,
    },
    filterContent:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    filterText:{
        fontSize:12,
        color:'#a7a7a7'
    },
    filterImg:{
        width:8,
        height:8,
        marginLeft:6
    },

    filterLineVertical:{
        width:1,
        height:16,
        alignSelf:'center',
        backgroundColor:'#ccc',
    },

    filterBottomLine:{
        backgroundColor:'#e1e1e1',
        height:0.5,
        shadowColor:'#f3f3f6',
        shadowOffset:{ width : 0 , height:1},
        shadowOpacity:1
    },
    list:{
        flex: 1,
    },
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
    }



});

export default HomeStyle;