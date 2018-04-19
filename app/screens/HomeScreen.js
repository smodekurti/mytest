import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import firebase from 'firebase';
import ScrollableHeader from '../components/ScrollableHeader/ScrollableHeader';

class HomeScreen extends React.Component{
    static navigationOptions = {
        header:null
    }
    
    
     componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
     }
    render(){
        return(
            <View style={styles.container}>
                <ScrollableHeader />
              

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#34495e',
        
    },
    text : {
        fontSize : 28,
        fontWeight: '700',
        color : 'white'
    }
});

export default HomeScreen;;
