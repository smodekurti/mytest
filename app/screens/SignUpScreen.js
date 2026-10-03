import React from 'react';
import {ScrollView, View,Text, StyleSheet, StatusBar, Button, TextInput , KeyboardAvoidingView , Image} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo/Logo'
import Container from '../components/Container/container'
import Login from '../components/Login/Login';
import * as firebase from 'firebase';
import firebaseUtil from '../utils/FirebaseUtil';
import {ConnectAlert} from '../components/Alert/index';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from '../DropDownHolder';



class SignUpScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'', password:'', loading: false}
        if (!firebase.apps.length) firebase.initializeApp(firebaseUtil.firebaseConfig);
    }

    static navigationOptions = {
        title : 'Home',
        header : null
    }

    
      
      



    signUpUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
                const { code, message } = error;
                DropDownHolder.dropDown.alertWithType('error', 'Sign up Failed',message);
            });
        } catch (error) {
            const { code, message } = error;
            console.log(message);
            //this.props.alertWithType('error', 'Error',message);
        }
        
    }

    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
              <View style={styles.logoContainer}>
                <Logo />
              </View>
              <View style={styles.formContainer}>
                <Login loginUser={this.loginUser}
                        signUpUser = {this.signUpUser}/>
             </View>    
             <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)}/>
            </KeyboardAvoidingView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ecc71'
    },
    logoContainer: {
        flexGrow:1,
        alignItems : 'center',
        justifyContent: 'center'
        
    },
    formContainer :{
       flex:2,
       marginBottom: 0
    },
});



export default SignUpScreen;