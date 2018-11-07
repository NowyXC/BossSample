import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet
    } from 'react-native';


export default class Test02 extends React.Component{
    
    render(){
        return(
            <View style = {Style.container}>
                <Text>Test02</Text>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    }
});