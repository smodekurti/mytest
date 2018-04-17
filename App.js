import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './app/config/RootNavigation';
import TabNavigator from './app/config/TabNavigator';

import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';
import { AlertProvider } from './app/components/Alert/index';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from './app/DropDownHolder';
import {Provider} from 'react-redux';
import store from './app/config/store';
import LoadingScreen from './app/screens/LoadingScreen';



export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <View style={{width: '100%', height: '100%'}}>
          <RootNavigator />
          <DropdownAlert ref={ref => DropDownHolder.setDropDown(ref)} closeInterval={3000}/>
        </View>  
      </Provider>
        
    );
  }
}



EStyleSheet.build(
  {
      $primaryOrange:'#D57A66',
      $primaryGreen:'#1dd1a1',
      $primaryPurple:'#9E7685',
      $primaryBlue: '#1e90ff',

      $white:'#ffffff',
      $border: '#e2e2e2',
      $lightGray: '#f0f0f0',
      $darkText: '#343434',
      $textBackground:'#3867d6',
      $darkButton:'#192a56'
      

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
