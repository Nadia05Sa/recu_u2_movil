import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []); 
  
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('../../assets/logo.png')} // Replace with your logo path
        // source={{ uri: 'https://example.com/logo.png' }} // Or use a URL
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.auPairText}>Au Pair</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
  },
  logo: {
    width: 150,
    height: 150,
  },
  auPairText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;