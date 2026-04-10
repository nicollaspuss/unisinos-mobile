import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';
import { PRODUCTS } from '../data/mockData';

const ProducerProfileScreen = ({ producer, onBack, onNavigate }) => {
  if (!producer) return null;
  const products = PRODUCTS.filter(p => p.producerId === producer.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Voltar'}</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.content}>
        <Image source={{ uri: producer.image }} style={styles.profileImage} />
        <Text style={styles.name}>{producer.name}</Text>
        <Text style={styles.history}>{producer.history}</Text>
        
        <Text style={styles.sectionTitle}>Produtos deste Produtor</Text>
        {products.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.miniCard}
            onPress={() => onNavigate('ProductDetail', item)}
          >
            <Image source={{ uri: item.image }} style={styles.miniImage} />
            <Text style={styles.miniName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  backButton: { padding: 15, backgroundColor: COLORS.primary },
  backButtonText: { color: '#FFF', fontWeight: 'bold' },
  content: { padding: 15 },
  profileImage: { width: '100%', height: 200, borderRadius: 100, alignSelf: 'center', width: 200 },
  name: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 15 },
  history: { fontSize: 16, color: '#444', textAlign: 'center', fontStyle: 'italic' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  miniCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginBottom: 10 },
  miniImage: { width: 50, height: 50, borderRadius: 5 },
  miniName: { marginLeft: 10, fontWeight: 'bold' }
});

export default ProducerProfileScreen;