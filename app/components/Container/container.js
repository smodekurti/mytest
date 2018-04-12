import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles'
import {TouchableWithoutFeedback, Keyboard } from 'react-native';

const Container = ({children, backgroundColor}) =>
{

    const containerStyles = [styles.container];

    if(backgroundColor){
        containerStyles.push({backgroundColor : backgroundColor});
    }
    
    
return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={containerStyles}>
        {children}
    </View>
    </TouchableWithoutFeedback>
)
}

Container.propTypes = {
   children: PropTypes.any,
   backgroundColor : PropTypes.string
}

export default Container;
