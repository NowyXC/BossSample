import React, {Component} from 'react';
import {Text, View} from 'react-native';

import MainStyle from '../../styles/Main';

class Company extends React.Component{
    render(){
        return(
            <View style={MainStyle.container}>
                <Text>Company</Text>
            </View>
        );
    }
}

export default Company;