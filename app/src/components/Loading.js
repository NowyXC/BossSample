import React,{Component} from 'react';  
import {Image} from 'react-native';  

export default class LoaddingView extends Component {  
  
    render() {  
        return( 
            <View style={{flex: 1}}> 
                <Image source={ require('./../../images/common/icon_empty.png') }  
                    style={ {width:64,height:64 } }  
                />
            </View>  
        )  
    }  
      
}