import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Button, Platform} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';
import styles from './style';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import {SHOW_LOGIN, SHOW_LOGOUT, SHOW_SIGNUP} from '../../actions/authentication';
import {show_login, show_logout,show_signup} from '../../actions/authentication';
import { SocialIcon , Divider} from 'react-native-elements';
 class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: '' ,
                      password: '',
                      fullName:''
                    };

    }

    
  

    render(){
        
        return(
          
            <View  style={styles.container }>
                    <StatusBar 
                        barStyle="light-content"/>
                    {
                        this.props.onLogin &&
                        <SocialIcon
                            title='Login With Facebook'
                            button
                            type='facebook'
                            style={styles.socialLogin}
                            raised={false}
                           />
                        
                         
                    }
                    {
                         this.props.onLogin &&
                         <SocialIcon
                            title='Login With Google'
                            button
                            type='google-plus-official'
                            style={styles.socialLogin}
                            raised={false}
                           />
                    }

                    
                    {
                    this.props.onSignUp &&
                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor = '#eee'
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="name-phone-pad"
                        returnKeyType="next"
                        onChangeText= {(input) => this.setState({fullName:input})}
                        onSubmitEditing={() => this.emailAddress.focus()}
                        />
                    }
                    <TextInput
                        placeholder="email address"
                        placeholderTextColor = '#eee'
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onChangeText= {(input) => this.setState({email:input})}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref={(input) => this.emailAddress = input}
                        />
                    <TextInput style={styles.input}
                        placeholder="password"
                        placeholderTextColor = '#eee'
                        secureTextEntry
                        returnKeyType="go"
                        onChangeText= {(input) => this.setState({password:input})}
                        ref={(input) => this.passwordInput = input}

                        />
                    

                
                    {
                    this.props.onLogin &&
                    <TouchableOpacity 
                        style={styles.loginButtonContainer}
                        onPress={() => {
                            this.props.loginUser(this.state.email,this.state.password)}
                        }>
                        <Text style={styles.button}> LOGIN </Text>
                    </TouchableOpacity>
                    }

                    {
                    this.props.onSignUp &&
                    <TouchableOpacity 
                        style={styles.loginButtonContainer}
                        onPress={() => {
                            this.props.signUpUser(this.state.email,this.state.password)}
                        }>
                        <Text style={styles.button}> Create Account </Text>
                    </TouchableOpacity>
                    }
                    
                    
                    <View style={styles.registrationContainer}>
                    {
                    this.props.onLogin &&   
                        <Button 
                            style={styles.registrationButtons}
                            color =  {Platform.OS === 'ios' ? '#eee' : null}
                            title="Create Account" 
                            onPress={() => this.props.dispatch(show_signup())}/>

                    }
                    {
                    this.props.onSignUp &&   
                        <Button 
                            style={styles.registrationButtons}
                            color =  {Platform.OS === 'ios' ? '#eee' : null}
                            title="Back to Login" 
                            onPress={() => this.props.dispatch(show_login())}/>

                    }
                    {
                    this.props.onLogin &&   
                        <Button 
                            style={styles.registrationButtons}
                            color =  {Platform.OS === 'ios' ? '#eee' : null}
                            title="Forgot Password" 
                            onPress={() => alert('Forgot Password')}/>

                        }
                   </View>  
                    
                </View>
            
        );
    }
}

const mapStateToProps = (state) => {
    const onLogin = state.authentication.onLogin;
    const onSignUp = state.authentication.onSignUp;;
    const loginSuccessful = state.authentication.loginSuccessful;

    console.log(onLogin);
    return{
        onLogin,
        onSignUp,
        loginSuccessful: loginSuccessful,
         
    };
    
};

export default connect(mapStateToProps) (Login);