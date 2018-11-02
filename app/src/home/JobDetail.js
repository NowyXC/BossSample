import React, {Component} from 'react';
import {Text, View} from 'react-native';

import MainStyle from '../../styles/Main';

class JobDetail extends React.Component{
    render(){
        return(
            <View style={MainStyle.container}>
                <Text>JobDetail</Text>
            </View>
        );
    }
}

export default JobDetail;