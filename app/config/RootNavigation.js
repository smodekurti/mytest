import { StackNavigator } from 'react-navigation';
import TabNavigation from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SampleScreen from '../screens/SampleScreen';

export default RootNavigation = StackNavigator(
    {
        Login : {
            screen : LoginScreen
        },
        Home : {
            screen : TabNavigation
        }
    },
     {
        initialRouteName : 'Login',

          
          
    }
)