import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen name="Login" options={{title: 'Login', headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{title: 'Register', headerShown: false}} component={Register} />
        <Stack.Screen name="Start" options={{title: 'Start', headerShown: false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
