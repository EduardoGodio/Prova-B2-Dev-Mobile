// index.js
import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const SUPABASE_URL = ''; // Substitua pelo seu Supabase URL
const SUPABASE_ANON_KEY = ''; // Substitua pela sua chave anônima
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
