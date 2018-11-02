import React, {Component} from 'react';
import {Text, View} from 'react-native';

import MainStyle from '../../styles/Main';

class Home extends React.Component{
    render(){
        return(
            <View style={MainStyle.container}>
                <Text onPress={()=>{
                    this.props.navigation.push('JobDetail')
                }}>Home</Text>
            </View>
        );
    }
}

export default Home;