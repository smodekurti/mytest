import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';

class NewGameScreen extends React.Component{
    static navigationOptions = {
        title : 'New Game'
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style = {styles.text}>New Game Screen </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#e74c3c'
    },
    text : {
        fontSize : 28,
        fontWeight: '700',
        color : 'white'
    }
});


export default NewGameScreen;;
