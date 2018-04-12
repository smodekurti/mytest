import { TabNavigator } from 'react-navigation';
import {Animated, Easing} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import NewGameScreen from '../screens/NewGameScreen';

export default TabNavigator(
    {
        Home : {
            screen : HomeScreen
        },
        Games: {
            screen : GamesScreen
        },
        NewGame: {
            screen : NewGameScreen
        }
    },
     {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        animationEnabled : true, 
   
         initialRouteName : "Home",
          tabBarOptions: {
            activeTintColor: '#eee',
            inactiveTintColor: '#aaa69d',
            labelStyle: {
              fontSize: 16,
            },
            style: {
              backgroundColor: '#40407a',
            },
          }
          
    }
)