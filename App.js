/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/pages/Welcome';
import Login from './src/pages/login';
import SignUp from './src/pages/signup';
import Home from './src/pages/home';
import Profile from './src/pages/profile';
import CreatePost from './src/pages/createPost';
const App = () => {
  const Stack = createStackNavigator();
    return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}} />
        <Stack.Screen name="CreatePost" component={CreatePost}  options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;