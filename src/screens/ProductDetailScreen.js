import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StarRating } from '../components/SharedComponents';
import { COLORS } from '../styles/theme';
import { PRODUCERS } from '../data/mockData';

const ProductDetailScreen = ({ product, onBack, onNavigate }) => {
  if (!product) return null;
  const producer = PRODUCERS.find(p => p.id === product.producerId);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Voltar'}</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.content}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <StarRating rating={product.rating} />
        <Text style={styles.certification}>{product.certificationStatus}</Text>
        <Text style={styles.description}>{product.description}</Text>

        {producer && (
          <TouchableOpacity 
            style={styles.producerBox} 
            onPress={() => onNavigate('ProducerProfile', producer)}
          >
            <Text style={styles.producerLink}>Produzido por: {producer.name} ➔</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.sectionTitle}>Avaliações</Text>
        {product.reviews.map((r, i) => (
          <View key={i} style={styles.reviewCard}>
            <Text style={styles.reviewUser}>{r.user}</Text>
            <Text style={styles.reviewComment}>{r.comment}</Text>
          </View>
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
  image: { width: '100%', height: 250, borderRadius: 10 },
  name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  certification: { color: COLORS.primary, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', lineHeight: 22 },
  producerBox: { marginVertical: 20, padding: 15, backgroundColor: '#E0E0B8', borderRadius: 8 },
  producerLink: { color: '#2E7D32', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  reviewCard: { backgroundColor: '#FFF', padding: 10, borderRadius: 8, marginTop: 10 }
});

export default ProductDetailScreen;