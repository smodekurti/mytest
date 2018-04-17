import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import firebase from 'firebase';

class HomeScreen extends React.Component{
    static navigationOptions = {
        title : 'Home',
    }
    
    
     componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
     }
    render(){
        return(
            <View style={styles.container}>

                <Text style = {styles.text}> Home Screen </Text>
                <Button 
                    title = "Go to Games Screen"
                    onPress = {() => this.props.navigation.navigate('Games')}
                />

                <Button 
                    title = "Go to New Game Screen"
                    onPress = {() => this.props.navigation.navigate('NewGame')}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#34495e',
        
    },
    text : {
        fontSize : 28,
        fontWeight: '700',
        color : 'white'
    }
});

export default HomeScreen;;
