import React, {Component} from 'react';
import {Text, View} from 'react-native';

import MainStyle from '../../styles/Main';

class Mine extends React.Component{
    render(){
        return(
            <View style={MainStyle.container}>
                <Text>Mine</Text>
            </View>
        );
    }
}

export default Mine;