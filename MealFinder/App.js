import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import FirstScreen from './view/FirstScreen';
import Home from './view/home';
import { LoginPage } from './view/LoginPage';
import { Main } from './view/Main';
import { SignPage } from './view/SignPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen"  options={{ headerShown: false }}  component={FirstScreen} />
        <Stack.Screen name="Home"  options={{ headerShown: false }}  component={Home} />
        <Stack.Screen name="LoginPage"  options={{ headerShown: false }}  component={LoginPage} />
        <Stack.Screen name="SignPage"  options={{ headerShown: false }}  component={SignPage} />
        <Stack.Screen name="Main"  options={{ headerShown: false }}  component={Main} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}