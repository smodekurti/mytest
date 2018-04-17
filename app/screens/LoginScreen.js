import React from 'react';
import {ScrollView, View,Text, StyleSheet, StatusBar, Button, TextInput , TouchableWithoutFeedback, KeyboardAvoidingView , Image, Keyboard} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo/Logo'
import Container from '../components/Container/container'
import Login from '../components/Login/Login';
import * as firebase from 'firebase';
import firebaseUtil from '../utils/FirebaseUtil';
import {ConnectAlert} from '../components/Alert/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from '../DropDownHolder';
import {LOGIN_SUCCESSFUL, login_successful} from '../actions/authentication';
import styles from './LoginScreenStyles';






class LoginScreen extends React.Component{
     

    constructor(props){
        super(props);
        this.state = {email:'', password:'', loading: false, signUpSuccessful:false}
        if(!firebase.apps.length)
            firebase.initializeApp(firebaseUtil.firebaseConfig);
        
    }

    static navigationOptions = {
        title : 'Home',
        header : null
    }

      
      

    onLoginUser = (email, password) => {
        try {

            
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                if(user!== null){                
                    this.props.navigation.navigate('Home');
                    this.props.dispatch(login_successful(user, user.email.email));
                }
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







export default connect() (LoginScreen);