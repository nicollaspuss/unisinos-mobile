import React, { useState } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native';
import { PRODUCTS, PRODUCERS } from '../data/mockData';
import { StarRating } from '../components/SharedComponents';
import { COLORS } from '../styles/theme';

const HomeScreen = ({ onNavigate }) => {
  const [searchText, setSearchText] = useState('');

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Função interna para renderizar cada card de produto
  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard} 
      onPress={() => onNavigate('ProductDetail', item)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <StarRating rating={item.rating} />
        <Text style={styles.certificationStatus}>{item.certificationStatus}</Text>
      </View>
    </TouchableOpacity>
  );

  // Função interna para renderizar cada card de produtor
  const renderProducerItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.producerCard} 
      onPress={() => onNavigate('ProducerProfile', item)}
    >
      <Image source={{ uri: item.image }} style={styles.producerImage} />
      <View style={styles.producerInfo}>
        <Text style={styles.producerName}>{item.name}</Text>
        <Text style={styles.producerLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Selo Colonial Brasil</Text>
        <Text style={styles.headerSubtitle}>Descubra a Autenticidade</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <Text style={styles.sectionTitle}>Produtos Certificados</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderProductItem}
        contentContainerStyle={styles.listPadding}
      />

      <Text style={styles.sectionTitle}>Produtores em Destaque</Text>
      <FlatList
        data={PRODUCERS}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderProducerItem}
        contentContainerStyle={styles.listPadding}
      />
      
      {/* Espaçamento extra no fim do scroll */}
      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { 
    paddingTop: 20,
    paddingBottom: 30, 
    backgroundColor: COLORS.primary, 
    alignItems: 'center' 
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFF' },
  headerSubtitle: { fontSize: 14, color: '#EEE' },
  searchContainer: { padding: 15, backgroundColor: COLORS.searchBg },
  searchInput: { 
    backgroundColor: '#FFF', 
    borderRadius: 25, 
    paddingHorizontal: 20, 
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary, margin: 15 },
  listPadding: { paddingHorizontal: 10 },
  productCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 10, 
    marginHorizontal: 8, 
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: { width: '100%', height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  productInfo: { padding: 10 },
  productName: { fontSize: 14, fontWeight: 'bold', height: 40 },
  certificationStatus: { fontSize: 10, color: COLORS.primary, fontWeight: 'bold', marginTop: 5 },
  producerCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 8,
    width: 150,
    alignItems: 'center',
    paddingBottom: 10,
    elevation: 2
  },
  producerImage: { width: '100%', height: 80, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  producerInfo: { padding: 5, alignItems: 'center' },
  producerName: { fontSize: 13, fontWeight: 'bold', textAlign: 'center' },
  producerLocation: { fontSize: 11, color: '#666' }
});

export default HomeScreen;