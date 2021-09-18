import "react-native-gesture-handler" 
import * as React from 'react';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator, createSwitchNavigator} from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen";
import IssLocationScreen from "./screens/IssLocationScreen";
import MeteorScreen from "./screens/MeteorScreen";
const Stack=createStackNavigator()


 function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="IssLocationScreen" component={IssLocationScreen}></Stack.Screen>
      <Stack.Screen name="MeteorScreen" component={MeteorScreen}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App


