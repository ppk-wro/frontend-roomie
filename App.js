import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import Profile from './component/Profile'
import Map from './component/Map'
import Chat from './component/Chat'
import Roommate from './component/Roommate'
import Home from './component/Home'
import Login from './component/Login'
import Splash from './component/Splash'
import Registration from './component/Registration'
import ForgetPass from './component/ForgetPass'

import { Provider } from 'react-redux';
import UserReducer from './reducers/UserReducer'
import { createStore } from 'redux'

const ForgetScreen = ({ navigation }) => (
  <ForgetPass navigation={navigation} />
)

const LoginScreen = ({ navigation }) => (
  <Login navigation={navigation} />
)

const RegistrationScreen = ({ navigation }) => (
  <Registration navigation={navigation} />

)
const SplashScreen = ({ navigation }) => (
  <Splash navigation={navigation} />
)

const HomeScreen = ({ navigation }) => (
  <Home navigation={navigation} />
)
const ProfileScreen = ({ navigation }) => (
  <Profile navigation={navigation} />
)
const RoommateScreen = ({ navigation }) => (
  <Roommate navigation={navigation} />
)
const ChatScreen = ({ navigation }) => (
  <Chat navigation={navigation} />
)
const MapScreen = ({ navigation }) => (
  <Map navigation={navigation} />
)


const Stack = createStackNavigator();
const MyStack = () => (
  <Stack.Navigator>

    <Stack.Screen name='Splash'
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Login'
      component={LoginScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen name='ForgetScreen'
      component={ForgetScreen}
      options={{ headerShown: false }}
    />


    <Stack.Screen name='Registation'
      component={RegistrationScreen}
      options={{ headerShown: false }}
    />


    <Stack.Screen name='BottomTab'
      component={MyBottomTab}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>
)

const BottomTab = createBottomTabNavigator();
const MyBottomTab = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#4285F4',
      tabBarInactiveTintColor: 'black',
    }}
  >
    <BottomTab.Screen name='Room' component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons color={color} name='home' size={26} />)
      }}
    />

    <BottomTab.Screen name='Roommate' component={RoommateScreen}
      options={{
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons color={color} name='account' size={26} />)
      }}
    />

    <BottomTab.Screen name='Chat' component={ChatScreen}
      options={{
        tabBarIcon: ({ color }) => (<Ionicons name="chatbubble-ellipses" size={24} color="black" />)
      }}
    />

    <BottomTab.Screen name='Map' component={MapScreen}
      options={{
        tabBarIcon: ({ color }) => (<FontAwesome5 name="map-marked-alt" size={24} color="black" />)
      }}
    />

    <BottomTab.Screen name='Profile' component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (<AntDesign name="bars" size={24} color="black" />)
      }}
    />


  </BottomTab.Navigator>
)

const store = createStore(UserReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {<MyStack />}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
