import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Statistics from './Pages/Statistics';
import Tabs from './Components/Tabs';
import List from './Pages/List';
import Setting from './Pages/Setting';

const Stack = createNativeStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen options={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'pop',
        animation: 'fade'
      }} name='Home' component={Home} />
    </Stack.Navigator>
  )
}
const StatisticsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Statistics"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen options={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'pop',
        animation: 'fade'
      }} name='Stat' component={Statistics} />
    </Stack.Navigator>
  )
}

const AddStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Add"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen options={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'pop',
        animation: 'fade'
      }} name='Add' component={Add} />
    </Stack.Navigator>
  )
}

function App(): JSX.Element {


  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'fade'
        }} name='Home' component={Home} />
        <Stack.Screen options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'fade'
        }} name='Add' component={Add} />
        <Stack.Screen options={{
          headerShown: false,
          presentation: 'modal',
          animationTypeForReplace: 'pop',
          animation: 'fade'
        }} name='Stat' component={Statistics} />
      </Stack.Navigator> */}
      <Tabs
        home={HomeStack}
        statistics={StatisticsStack}
        add={AddStack}
        list={List}
        setting={Setting}
      />
    </NavigationContainer>
  );
}


export default App;
