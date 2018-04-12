import React from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';

class GamesScreen extends React.Component{
    static navigationOptions = {
        title : 'Games',
        headerBackTitle: null
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style = {styles.text}> Games Screen </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#2980b9'
    },
    text : {
        fontSize : 28,
        fontWeight: '700',
        color : 'white'
    }
});

export default GamesScreen;;
