import React , {Component} from 'react';
import {View, 
  Image,
  ImageBackground, 
  Text, 
  Keyboard, 
  Animated, 
  StyleSheet,
  DeviceEventEmitter, 
  Platform,
  Easing,
  TouchableWithoutFeedback,

} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {

constructor(props){
  super(props);

  this.state = {
    containerImageWidth : new Animated.Value(styles.$largeContainerSize),
    imageWidth : new Animated.Value(styles.$largeImageSize),
    title: 'Currency Converter',
    growAnimation : new Animated.Value(0),
    elasticText : new Animated.Value(0)
  };

} 

componentDidMount(){
  const name = Platform.OS === 'ios' ? 'Will' : 'Did';
  this.keyboardDidShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow);
  this.keyboardDidHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide);
  this.spin();
  this.elastic();
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

spin = () => {
  this.state.growAnimation.setValue(0);

  Animated.timing(this.state.growAnimation, {
    toValue: 1,
    duration: 5000,
    easing: Easing.linear,
  }).start((animation) => {
    if (animation.finished) {
      this.spin();
    }
  });
};

elastic = () => {
  this.state.elasticText.setValue(0);
  Animated.timing(this.state.elasticText, {
    toValue: 1,
    duration:2000,
    easing:Easing.circle,
  }).start((animation) => {
    if (animation.finished) {
      this.elastic();
    }
  });
}




render(){
  const squareAnimation = {

    transform: [
      {
        rotate: this.state.growAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
        
        
      }
    ],
  };

  const textAnimation = {

    transform: [
      {
        skewX: this.state.elasticText.interpolate({
          inputRange: [0, 1],
          outputRange: ['-15deg', '15deg'],
        }),
        
        
      }
    ],
  };

  const containerImageStyle = [
    styles.containerImages,
    
    {
      width: this.state.containerImageWidth, 
      height: this.state.containerImageWidth
    },
  ];

  const imageStyle = [
    styles.image,
    squareAnimation ,
    {
      width: this.state.imageWidth, 
      height: this.state.imageWidth
    },
    this.props.tintColor ? { tintColor: this.props.tintColor } : null,
  ];

  const elasticStyle = [
    styles.text,
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
       
       <Animated.Text style={elasticStyle}> Welcome to Poker Zone </Animated.Text>
      </View>
      )
    
  }
 
  }
export default Logo;