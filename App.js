import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import AddTeacher from './src/AddTeacher';
import Phase2 from './src/Phase2 ';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Enlève l'en-tête de l'écran Home
        />
        <Stack.Screen
          name="AddTeacher"
          component={AddTeacher}
          options={{
            headerShown: false, // Enlève l'en-tête pour l'écran AddTeacher
          }}
        />
        <Stack.Screen
          name="Phase2"
          component={Phase2}
          options={{
            headerShown: false, // Enlève l'en-tête pour l'écran Phase2
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
