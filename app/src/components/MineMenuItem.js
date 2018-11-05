import React,{Component} from 'react';  
import {
    Image,
    Text,
    View,
    TouchableHighlight,
    StyleSheet
    } from 'react-native';  

export default class MineMenuItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableHighlight 
                onPress={this.props.onPress}
                >
                <View style={ItemStyle.item}>
                    <Image source={this.props.LeftImg}/>
                    <Text style={ItemStyle.title}>{this.props.title}</Text>
                    <Text style={ItemStyle.content}>{this.props.content}</Text>
                    <View/>
                    <Image source={
                        require('../../images/arrow/ic_arrow_gray.png')
                        }
                        resizeMode='center'
                        style={ItemStyle.rightImg}
                    />
                </View>
            </TouchableHighlight>
        );
    }
}


const ItemStyle = StyleSheet.create({
    item:{
        paddingHorizontal:12,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:60
    },
    title:{
        flex:1,
        fontSize:16,
        color:'#111'
    },
    content:{
        fontSize:14,
        color:'#a7a7a7',
    },
    rightImg:{
        height:40,
        width:24,
    }
});