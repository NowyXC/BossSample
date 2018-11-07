import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet
    } from 'react-native';
import {createStackNavigator} from 'react-navigation';

    export default class Test01 extends React.Component{
        

        render(){
            // const { navigate } = this.props.navigation;
            return(
                <View style = {Style.container}>
                    <Text onPress={()=>{
                        this.props.navigation.navigate('Test02')
                    }}>Test01</Text>
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