import React from 'react';
import { TouchableHighlight , Text, View} from 'react-native';
import { Icon } from 'react-native-elements'

import { TabNavigator, TabBarBottom } from 'react-navigation';
import {Animated, Easing} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import NewGameScreen from '../screens/NewGameScreen';
import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons'
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {LOGOUT, logout} from '../actions/authentication';
import LogoutButton from '../components/Logout/Logout';
import {connect} from 'react-redux';

const tabnav = TabNavigator(
    {
        Home : {
            screen : HomeScreen,
            
            
        },
        Games: {
            screen : GamesScreen,
            
        },
        NewGame: {
            screen : NewGameScreen,
           
        }
    },
     {
      
         navigationOptions: ({navigation}) => ({   
            headerLeft: null, 
           
            tabBarIcon: ({focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                  iconName = `home`;
                } else if (routeName === 'Games') {
                  iconName = `apps`;
                } else if(routeName === 'NewGame'){
                    iconName = `games`
                }
                return  (<Icon size={30} name={iconName} />)
                },
          }),
          tabBarOptions: {
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
            
          },
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          animationEnabled: true,
          swipeEnabled: false,
        
          
    },
    
)

export default (tabnav)