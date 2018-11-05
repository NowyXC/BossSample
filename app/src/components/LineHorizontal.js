import React,{Component} from 'react';  
import {View,StyleSheet} from 'react-native';  


export default class LineHorizontal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View 
                
                style={[this.props.style,LineStyle.line]}
            />
        );
    }

}

const LineStyle = StyleSheet.create({
    line:{
        height:0.5,
        backgroundColor:'#f7f7f7',
    }
});
