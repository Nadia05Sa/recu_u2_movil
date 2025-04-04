import { View, Text,  TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={16} color="#888" />
          <TextInput 
            placeholder="Search Airbnb" 
            style={styles.searchInput}
          />
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Introducing Airbnb Au Pair</Text>
        <Text style={styles.subtitle}>Choose a family home with a qualified childcare provider.</Text>
        
        <View style={styles.placeholderImage} />
        
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.buttonText}>EXPLORE HOMES</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
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
    content: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 18,
      color: '#666',
      marginBottom: 24,
      lineHeight: 24,
    },
    placeholderImage: {
      height: 250,
      backgroundColor: '#f0f0f0',
      borderRadius: 12,
      marginBottom: 24,
    },
    exploreButton: {
      backgroundColor: '#FF5A5F', // Airbnb's primary color
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    arrowIcon: {
      color: '#fff',
      fontSize: 20,
    }
  }

export default HomeScreen;