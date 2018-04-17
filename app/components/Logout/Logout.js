import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {LOGOUT, logout} from '../../actions/authentication';
import * as firebase from 'firebase';
import firebaseUtil from '../../utils/FirebaseUtil';


class Logout extends Component{
    constructor(props){
        super(props);

    }

    _logoutUser(){
        
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseUtil.firebaseConfig);
        }                

        firebase.auth().signOut().then(() => {
            //this.props.navigation.navigate('Loading');
            this.props.dispatch(logout());
            
        })
        
    }
    render(){
        return(
            <TouchableHighlight  style={{paddingHorizontal:20}}>
                <Icon 
                    name="exit-to-app" 
                    onPress= {() => {
                        this._logoutUser();
                    }}
                    size={30} />
            </TouchableHighlight>
        )
    }
}

export default connect() (Logout);