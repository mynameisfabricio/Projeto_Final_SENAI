import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../theme/colors';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.primary,
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerTintColor: colors.primary,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Peças Técnicas',
          }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detalhes Técnicos',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;