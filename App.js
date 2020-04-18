import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar} from 'react-native';

import TeslaHome from './src/screens/Home';
import Order from './src/screens/Order';
import Checkout from './src/screens/Checkout';

const Stack = createStackNavigator();

// Tesla
const Navigator = (props) => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={TeslaHome} />
      <Stack.Screen name="OrderScreen" component={Order} />
      <Stack.Screen name="CheckoutScreen" component={Checkout} />
    </Stack.Navigator>
  </NavigationContainer>
);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
