import React, {Component} from 'react';
import LogoutButton from '../components/Logout/Logout';
import { StackNavigator } from 'react-navigation';
import TabNavigation from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SampleScreen from '../screens/SampleScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ScrollableHeader from '../screens/ScrollableHeader';

 const RootNavigation = StackNavigator(
    {
        Loading: {
            screen : LoadingScreen
        },
        Login : {
            screen : LoginScreen
        },
        Home : {
            screen : TabNavigation
        },
        Scroll : {
            screen : ScrollableHeader
        }
    },
     {
        initialRouteName : 'Loading',
        navigationOptions: ({navigation}) => ({   
            headerLeft: null, 
            headerRight: 
            (<LogoutButton navigation={navigation}/>),
           
          }),
        
        
          
    },
     
 
)

export default RootNavigation;