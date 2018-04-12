import React from 'react';
import {ScrollView, View,Text, StyleSheet, StatusBar, Button, TextInput , KeyboardAvoidingView , Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo/Logo'
import Container from '../components/Container/container'
import Login from '../components/Login/Login';

class SampleScreen extends React.Component{
    static navigationOptions = {
        title : 'Home',
        header : null
    }
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
              <View style={styles.logoContainer}>
                <Logo />
              </View>
              <View style={styles.formContainer}>
                <Login />
             </View>    
            
            </KeyboardAvoidingView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        flexGrow:1,
        alignItems : 'center',
        justifyContent: 'center'
        
    },
    formContainer :{
        
        marginBottom: 120
    },
});

export default SampleScreen;