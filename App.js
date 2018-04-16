import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './app/config/RootNavigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';
import { AlertProvider } from './app/components/Alert/index';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownHolder from './app/DropDownHolder';
import {Provider} from 'react-redux';
import store from './app/config/store';



export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <View style={{width: '100%', height: '100%'}}>
          <TabNavigator />
          <DropdownAlert ref={ref => DropDownHolder.setDropDown(ref)} closeInterval={6000}/>
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
      $primaryBlue: '#3498db',

      $white:'#ffffff',
      $border: '#e2e2e2',
      $lightGray: '#f0f0f0',
      $darkText: '#343434'
      

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
