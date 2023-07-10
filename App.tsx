import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Statistics from './Pages/Statistics';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
