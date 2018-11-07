import {Platform, StyleSheet} from 'react-native';


const MsgTabStyle = StyleSheet.create({
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
    titlebarContentOnSelected:{
        backgroundColor:'white'
    },
    titlebarContentOnUnSelected:{
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
    titlebarContentTxtOnUnSelected:{
        color:'white',
    },
    titlebarConntentUnreadPoint:{
        backgroundColor:'red',
        width:6,
        height:6,
        borderRadius:3,
        
        marginTop:4,
    },
});

export default MsgTabStyle;