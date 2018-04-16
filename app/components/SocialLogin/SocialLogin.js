import React , {Component} from 'react';
import {View, Image,ImageBackground, Text, Keyboard, Animated, StyleSheet,DeviceEventEmitter, Platform} from 'react-native';
import style from './style';

class SocialLogin extends Component{
    render(){
        return(
            <Image source={require('./images/G.png')} 
            resizeMode="contain"
            style={style.Image}
                />
        )
    }
}

export default SocialLogin;