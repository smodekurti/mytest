import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Button, Platform} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import styles from './style';
import * as firebase from 'firebase';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '' ,
                      password: '',
                      fullName:''};
    }

    _renderLoginButton(){

    }

    _renderSignUpButton(){
        
    }
  

    render(){
        return(
          
            <View  style={styles.container}>
                    <StatusBar 
                        barStyle="light-content"/>
                    <TextInput
                        placeholder="username or email"
                        placeholderTextColor = '#eee'
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onChangeText= {(input) => this.setState({email:input})}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        />
                    <TextInput style={styles.input}
                        placeholder="password"
                        placeholderTextColor = '#eee'
                        secureTextEntry
                        returnKeyType="go"
                        onChangeText= {(input) => this.setState({password:input})}
                        ref={(input) => this.passwordInput = input}

                        />
                
                    <TouchableOpacity 
                        style={styles.loginButtonContainer}
                        onPress={() => {
                            this.props.loginUser(this.state.email,this.state.password)}
                        }>
                        <Text style={styles.button}> LOGIN </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                        style={styles.signUpButtonContainer}
                        onPress={() => {
                            this.props.signUpUser(this.state.email,this.state.password)}
                        }>
                        <Text style={styles.button}> SignUp </Text>
                    </TouchableOpacity>
                    <View style={styles.registrationContainer}>
                        
                        <Button 
                            style={styles.registrationButtons}
                            color =  {Platform.OS === 'ios' ? '#eee' : null}
                            title="Forgot Password" 
                            onPress={() => alert('Forgot Password')}/>

                    </View>  
                </View>
            
        );
    }
}