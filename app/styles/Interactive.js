import {Platform, StyleSheet} from 'react-native';

const InteractiveStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
    },
    list:{
        flex: 1,
    },
    itemContainer:{
        flexDirection:'column',
        marginBottom:10,
        backgroundColor:'white'
    },
    itemDivider:{
        marginHorizontal:12
    },
    itemBottomTxt:{
        color:'#a7a7a7',
        fontSize:12,
        fontFamily:'Microsoft Yahei',
        paddingHorizontal:14,
        paddingVertical:10
    }
})

export default InteractiveStyle;

 