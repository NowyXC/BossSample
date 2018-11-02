import React, {Component} from 'react';
import {Text, View} from 'react-native';

import MainStyle from './../../styles/Main';

class Message extends React.Component{
    render(){
        return(
            <View style={MainStyle.container}>
                <Text>Message</Text>
            </View>
        );
    }
}

export default Message;