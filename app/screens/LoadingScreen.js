import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Styles from './LoadingScreenStyle';
import Logo from '../components/Logo/Logo';
import * as firebase from 'firebase';
import firebaseUtil from '../utils/FirebaseUtil';
import {LOGIN_SUCCESSFUL, login_successful} from '../actions/authentication';
import {connect} from 'react-redux';



 class LoadingScreen extends React.Component {
  static navigationOptions = {
    header : null
  }
  componentWillReceiveProps(_newprops) {
    this._checkAuth()
  }

  componentDidMount(){
    this._checkAuth()
  }

  _checkAuth(){
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseUtil.firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      
      const { currentUser } = firebase.auth();
      console.log(currentUser);
      this.props.navigation.navigate(user ? 'Home' : 'Login')
      this.props.dispatch(login_successful(user, currentUser));
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.logoContainer}>
                <Logo />
        </View>
        <View style={Styles.formContainer}>
          <Text style={Styles.text}>Signing In ....</Text>
          <ActivityIndicator size="large" color='#2c3e50' />
        </View>
      </View>
    )
  }
}

export default connect() (LoadingScreen);
