import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';
import {RootStackParamList} from '../types';
import CardList from '../components/CardList';

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CardList" component={CardList} />
    </Stack.Navigator>
  );
}

const Navigation: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
