import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import TabNavigator from './src/navigation/TabNavigator';
import AuPairScreen from './src/screens/AuPairScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="AuPairDetails" component={AuPairScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos para los componentes
const styles = StyleSheet.create({
  // Estilos para la pantalla de inicio
  splashContainer: {
    flex: 1,
    backgroundColor: '#FF5A5F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    tintColor: 'white',
  },
  auPairText: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
    fontWeight: '300',
  },
  
  // Estilos generales
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  
  // Estilos para la barra de búsqueda
  searchContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  
  // Estilos para la pantalla de introducción
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  placeholderImage: {
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: 18,
    marginLeft: 5,
  },
  
  // Estilos para la pantalla de detalles
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
  },
  auPairTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  profileImagePlaceholder: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    alignSelf: 'center',
    marginBottom: 15,
  },
  quoteContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 20,
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 5,
  },
  quoteAuthor: {
    textAlign: 'right',
    fontSize: 12,
  },
  reviewsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingNumber: {
    marginRight: 10,
    fontSize: 16,
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  starsSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingCount: {
    fontSize: 12,
    marginLeft: 5,
  },
  availabilityButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  availabilityText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default App;