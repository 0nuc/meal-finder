import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import FirstScreen from './view/FirstScreen';
import Home from './view/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen"  options={{ headerShown: false }}  component={FirstScreen} />
        <Stack.Screen name="Home"  options={{ headerShown: false }}  component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}