
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import NewsList from '../lists/NewsList';
import Home from '../screens/Home';
import NewsDetail from '../screens/NewsDetail';


import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
           headerTransparent: true,
           headerTitle: '',
           headerTintColor: 'white',
           headerLeftContainerStyle: {
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'rgba(92,90,91,0.7)',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 15
           }
        }}>
           <Stack.Screen options={{

              headerTitle: 'NEWSBOOK',
              headerStyle: {
                backgroundColor: '#4B3232',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
              headerTransparent: false,
              headerTitleStyle: { alignSelf: 'left',   marginLeft: 15 },
              headerRight: () => (
               <TouchableOpacity
                 onPress={() => alert('Right Menu Clicked')}
                 style={{marginRight: 15}}>
                 <Text style={{color: 'white', fontSize: 18}}>Signin</Text>
               </TouchableOpacity>
             ),
           
        }}
           
           name='Home' component={Home} />
           <Stack.Screen name='NewsList' component={NewsList} />
           <Stack.Screen name='NewsDetail' component={NewsDetail} />
        </Stack.Navigator>
     )
}


const styles = StyleSheet.create({
})

export default AppNavigation;
