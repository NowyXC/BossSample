import React,{Component} from 'react';  
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';  


export default class MineJobInfoContent extends React.Component{

    constructor(props){
        super(props);
    }

   

    render(){
        return(
            <View style={Style.container}>
                <Text style={Style.numTxt}>{this.props.num}</Text>
                <Text style={Style.contentTxt}>{this.props.content}</Text>
            </View>
        );
    }
}


const Style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    numTxt:{
        color:'#111',
        fontSize:16,
    },
    contentTxt:{
        color:'#999',
        marginTop:4,
        fontSize:14
    }
});