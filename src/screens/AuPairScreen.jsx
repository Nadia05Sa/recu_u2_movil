import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const AuPairScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.locationHeader}>
        <Ionicons name="location" size={20} color="#FF5A5F" />
        <Text style={styles.locationText}>San Diego, CA</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.auPairTitle}>MEET AU PAIR LISA</Text>

        <Image 
          source={{ uri: 'https://placehold.co/100x100.png' }} 
          style={styles.profileImage} 
        />

        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>"I love to cook with the kids while you enjoy date night!"</Text>
          <Text style={styles.quoteAuthor}>- Lisa</Text>
        </View>

        <Text style={styles.reviewsTitle}>Lisa's Reviews</Text>
        <View style={styles.starsContainer}>
          <Text style={styles.ratingNumber}>75</Text>
          {[1, 2, 3, 4, 5].map(star => (
            <FontAwesome key={star} name="star" size={16} color="#FFD700" />
          ))}
        </View>

        <View style={styles.pricingContainer}>
          <View>
            <Text style={styles.price}>$99/night</Text>
            <View style={styles.starsSmall}>
              {[1, 2, 3, 4, 5].map(star => (
                <FontAwesome key={star} name="star" size={12} color="#FFD700" />
              ))}
              <Text style={styles.ratingCount}>75</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.availabilityButton}>
            <Text style={styles.availabilityText}>CHECK AVAILABILITY</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  locationText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  auPairTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    height: 250,
    width: '100%',
    borderRadius: 12,
    marginBottom: 24,
  },
  quoteContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 8,
    textAlign: 'center',
  },
  quoteAuthor: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '600',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  ratingNumber: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  starsSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingCount: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  availabilityButton: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  availabilityText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default AuPairScreen;