import React from 'react';
import {ScrollView, View,Text, StyleSheet, StatusBar, Button, TextInput , TouchableWithoutFeedback, KeyboardAvoidingView , Image, Keyboard} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo/Logo'
import Container from '../components/Container/container'
import Login from '../components/Login/Login';
import * as firebase from 'firebase';
import {ConnectAlert} from '../components/Alert/index';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from '../DropDownHolder';

import styles from './LoginScreenStyles';






class LoginScreen extends React.Component{
     firebaseConfig = {
        apiKey: "AIzaSyB93ccrBJu-vAyRUYkzT9VY-OsHo9UJdOc",
        authDomain: "pokerzone-7b970.firebaseapp.com",
        databaseURL: "https://pokerzone-7b970.firebaseio.com",
        projectId: "pokerzone-7b970",
        storageBucket: "pokerzone-7b970.appspot.com",
        messagingSenderId: "469756227615"
      };

    constructor(props){
        super(props);
        this.state = {email:'', password:'', loading: false, signUpSuccessful:false}
        firebase.initializeApp(this.firebaseConfig);
    }

    static navigationOptions = {
        title : 'Home',
        header : null
    }

    
      
      

    onLoginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(user){
                console.log(user);
            })
            .catch(function(error){
                const { code, message } = error;
               DropDownHolder.dropDown.alertWithType('error', 'Authentication Failed',message);
            })
        } catch (error) {
            const { code, message } = error;
            console.log("Login Failed");
            //this.props.alertWithType('error', 'Error',message);
;        }
        
    }

    onSignUpUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((user) =>
                this.setState({signUpSuccessful:true})
            
            )
            .catch(function(error){
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" style={styles.container} >
            
              <View style={styles.logoContainer}>
                <Logo />
              </View>

              <View style={styles.formContainer}>
              
                    />
                <Login  
                        loginUser={this.onLoginUser}
                        signUpUser = {this.onSignUpUser}
                        
                        />
             </View>    

             <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)}/>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }
}







export default LoginScreen;