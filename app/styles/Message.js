import {Platform, StyleSheet} from 'react-native';

const MsgStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4f4f4',
      },
      titlebar:{
        flexDirection:'row',
        alignItems:'center',
        height:44,
        backgroundColor:'#53cac3',
        paddingLeft:16
    },
    titlebarBothSides:{
        width:44,
        height:44
    },
    titleContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    titlebarContent:{
        flexDirection:'row',
        width:160,
        height:28,
        borderRadius:6,
        borderColor:'white',
        borderWidth:1,
    },
    titlebarContentLeft:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        backgroundColor:'white',
    },
    titlebarContentRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:'rgba(255,255,255,0.0)'
    },
    titlebarContentTxt:{
        color:'white',
        fontSize:14,
        textAlign:'center',
        alignSelf:'center',
        textAlignVertical:'center',
    },
    titlebarContentTxtOnSelected:{
        color:'#52c9c3',
    },
    titlebarConntentUnreadPoint:{
        backgroundColor:'red',
        width:6,
        height:6,
        borderRadius:3,
        
        marginTop:4,
    },
    list:{
        flex:1
    },
    headerContainer:{
        flexDirection:'column',
    },
    headerSearchBar:{
        paddingHorizontal:16,
        height:60,
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:'white'
    },
    headerSearchBarContent:{
        backgroundColor:'#f4f4f4',
        flexDirection:'row',
        paddingHorizontal:12,
        paddingVertical:10,
        borderRadius:4,
    },
    headerSearchBarImg:{
        height:16,
        width:16
    },
    headerSearchBarHint:{
        marginLeft:10,
        color:'#a7a7a7',
        fontSize:12
    },
    headerBottomLine:{
        height:8,
        backgroundColor:'#F4f4f4'
    },
    headerHandle:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingTop:12,
        paddingBottom:8
    },
    headerHandleContact:{
        flex:1,
        color:'#111',
        fontSize:16,
        fontWeight:'bold'
    },
    headerHandleAll:{
        color:'#777777',
        fontSize:14,
        borderRadius:4,
        borderColor:'#a7a7a7',
        borderWidth:1,
        textAlign:'center',
        paddingHorizontal:4,
        paddingVertical:2
    },
    itemContainer:{
        flexDirection:'column',
        backgroundColor:'white',
        padding:12,
        paddingBottom:0
    },
    itemContent:{
        flexDirection:'row'
    },
    itemLeft:{

    },
    itemLeftImg:{
        width:42,
        height:42,
        borderRadius:21
    },
    itemMiddle:{
        flex:1,
        flexDirection:'column',
        marginLeft:12
    },
    itemMiddleUserInfo:{
        flexDirection:'row',
        alignItems:'baseline'
    },
    itemMiddleUserName:{
        fontSize:16,
        color:'#111'
    },
    itemMiddleUserDesc:{
        fontSize:12,
        color:'#a7a7a7',
        marginLeft:6,
    },
    itemMiddleMessage:{
        marginTop:4,
        fontSize:14,
        color:'#a7a7a7'
    },
    itemRight:{
        flexDirection:'column',
        alignItems:'center',
        paddingTop:4
    },
    itemRightDate:{
        fontSize:12,
        color:'#a7a7a7',
    },
    itemRightUnread:{
        marginTop:6,
        fontSize:12,
        color:'white',
        height:18,
        paddingLeft:6,
        paddingRight:6,
        borderRadius:12,
        backgroundColor:'red',
        textAlign:'center'
    },
    itemBottomLine:{
        backgroundColor:'#e1e1e1',
        height:0.5,
        marginTop:12
    }
});

export default MsgStyle;