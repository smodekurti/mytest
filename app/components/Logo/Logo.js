import React , {Component} from 'react';
import {View, Image,ImageBackground, Text, Keyboard, Animated, StyleSheet,DeviceEventEmitter, Platform} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {

constructor(props){
  super(props);

  this.state = {
    containerImageWidth : new Animated.Value(styles.$largeContainerSize),
    imageWidth : new Animated.Value(styles.$largeImageSize),
    title: 'Currency Converter'
  };

} 

componentDidMount(){
  const name = Platform.OS === 'ios' ? 'Will' : 'Did';
  this.keyboardDidShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow);
  this.keyboardDidHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide);
} 

componentWillUnmount(){
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();
}

keyboardShow = () => {

  Animated.parallel([
    Animated.timing(this.state.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION,
    }),
    Animated.timing(this.state.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    }),
  ]).start();
}

keyboardHide = () => {
 
  Animated.parallel([
    Animated.timing(this.state.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION,
    }),
    Animated.timing(this.state.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION,
    }),
  ]).start();
}


render(){
  const containerImageStyle = [
    styles.containerImages,
    {
      width: this.state.containerImageWidth, 
      height: this.state.containerImageWidth
    },
  ];

  const imageStyle = [
    styles.image,
    {
      width: this.state.imageWidth, 
      height: this.state.imageWidth
    },
    this.props.tintColor ? { tintColor: this.props.tintColor } : null,
  ];

  return(
    <View style={styles.container}>
    
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyle]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/poker_chip.png')}
          />
        </Animated.View> 
       <Text style={styles.text}> Welcome to Poker Zone </Text>
      </View>
      )
    
  }
 
  }
export default Logo;