import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import PartFinder from './src/components/PartFinder';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PartFinder />
    </>
  );
}
