import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const PRODUCTS = [
  {
    id: '1',
    name: 'Produtos Coloniais - São Leopoldo - RS',
    description: 'Quejos, mel, salame e suco de uva da melhor qualidade.',
    origin: 'São Leopoldo, RS',
    producerId: 'prod1',
    image: 'https://images.unsplash.com/photo-1486297678162-ad2a19b05840?auto=format&fit=crop&w=300&q=80',
    rating: 4.8,
    reviews: [
      { user: 'Maria L.', comment: 'Queijo maravilhoso! Sabor incrível, recomendo muito!', date: 'há 2 dias' },
      { user: 'João P.', comment: 'Excelente qualidade, vou comprar novamente!', date: 'há 1 semana' },
    ],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
  {
    id: '2',
    name: 'Salame Colonial Defumado',
    description: 'Salame artesanal defumado em lenha de eucalipto, com temperos naturais e maturação lenta. Sabor intenso e tradicional.',
    origin: 'Vale do Taquari, RS',
    producerId: 'prod2',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=300&q=80',
    rating: 4.5,
    reviews: [
      { user: 'Ana C.', comment: 'Sabor autêntico, me lembrou a casa da minha avó.', date: 'há 4 dias' },
    ],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
  {
    id: '3',
    name: 'Suco de Uva Integral Orgânico',
    description: 'Suco 100% fruta, sem adição de açúcar ou conservantes. Produzido com uvas orgânicas da variedade Bordô.',
    origin: 'Bento Gonçalves, RS',
    producerId: 'prod1',
    image: 'https://images.unsplash.com/photo-1523362628242-f513a65a2210?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    reviews: [
      { user: 'Pedro R.', comment: 'O melhor suco de uva que já tomei! Sabor puro.', date: 'há 1 semana' },
      { user: 'Carla M.', comment: 'Excelente para o café da manhã.', date: 'há 3 semanas' },
    ],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
  {
    id: '4',
    name: 'Mel Silvestre Puro',
    description: 'Mel puro de flores silvestres, colhido de forma sustentável. Rico em nutrientes e com sabor adocicado e floral.',
    origin: 'Planalto Serrano, SC',
    producerId: 'prod2',
    image: 'https://images.unsplash.com/photo-1584473457406-623048ff43f4?auto=format&fit=crop&w=300&q=80',
    rating: 4.7,
    reviews: [
      { user: 'Lucas F.', comment: 'Qualidade impecável, uso em tudo!', date: 'há 5 dias' },
    ],
    certificationStatus: 'Certificado Selo Colonial Brasil',
  },
];

const PRODUCERS = [
  {
    id: 'prod1',
    name: 'Fazenda Colonial Sabor da Roça',
    history: 'Desde 1985, cultivando produtos artesanais com amor e tradição no coração da Serra Gaúcha. Especializados em laticínios e sucos.',
    location: 'Bento Gonçalves, RS',
    contact: 'contato@sabordaroca.com.br',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea85521?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'prod2',
    name: 'Sítio Boa Esperança',
    history: 'Pequena propriedade familiar em Santa Catarina, dedicada à produção de embutidos e mel com métodos tradicionais e sustentáveis.',
    location: 'Santa Catarina, SC',
    contact: 'sitioboaesperanca@email.com',
    image: 'https://images.unsplash.com/photo-1580587771522-cf870a797a04?auto=format&fit=crop&w=300&q=80',
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text key={i} style={i <= rating ? styles.filledStar : styles.emptyStar}>
        ★
      </Text>
    );
  }
  return <View style={styles.starContainer}>{stars}</View>;
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home'); // 'Home', 'ProductDetail', 'ProducerProfile'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducer, setSelectedProducer] = useState(null);
  const [searchText, setSearchText] = useState('');

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderProductCard = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => {
        setSelectedProduct(item);
        setCurrentScreen('ProductDetail');
      }}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productOrigin}>{item.origin}</Text>
        <StarRating rating={item.rating} />
        <Text style={styles.certificationStatus}>{item.certificationStatus}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderProducerCard = ({ item }) => (
    <TouchableOpacity
      style={styles.producerCard}
      onPress={() => {
        setSelectedProducer(item);
        setCurrentScreen('ProducerProfile');
      }}
    >
      <Image source={{ uri: item.image }} style={styles.producerImage} />
      <View style={styles.producerInfo}>
        <Text style={styles.producerName}>{item.name}</Text>
        <Text style={styles.producerLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const HomeScreen = () => (
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
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Produtores em Destaque</Text>
      <FlatList
        data={PRODUCERS}
        renderItem={renderProducerCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </ScrollView>
  );

  const ProductDetailScreen = () => {
    if (!selectedProduct) return null;
    const producer = PRODUCERS.find(p => p.id === selectedProduct.producerId);

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'< Voltar'}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.detailContent}>
          <Image source={{ uri: selectedProduct.image }} style={styles.detailImage} />
          <View style={styles.detailHeader}>
            <Text style={styles.detailName}>{selectedProduct.name}</Text>
            <StarRating rating={selectedProduct.rating} />
            <Text style={styles.detailOrigin}>{selectedProduct.origin}</Text>
            <Text style={styles.detailCertification}>{selectedProduct.certificationStatus}</Text>
          </View>
          <Text style={styles.detailDescription}>{selectedProduct.description}</Text>

          {producer && (
            <TouchableOpacity
              onPress={() => {
                setSelectedProducer(producer);
                setCurrentScreen('ProducerProfile');
              }}
              style={styles.producerLink}
            >
              <Text style={styles.producerLinkText}>Produzido por: {producer.name} {' >'}</Text>
            </TouchableOpacity>
          )}

          <Text style={styles.reviewsTitle}>Avaliações dos Consumidores</Text>
          {selectedProduct.reviews.length > 0 ? (
            selectedProduct.reviews.map((review, index) => (
              <View key={index} style={styles.reviewCard}>
                <Text style={styles.reviewUser}>{review.user}</Text>
                <Text style={styles.reviewComment}>{review.comment}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noReviewsText}>Nenhuma avaliação ainda.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  };

  const ProducerProfileScreen = () => {
    if (!selectedProducer) return null;
    const producerProducts = PRODUCTS.filter(p => p.producerId === selectedProducer.id);

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'< Voltar'}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.detailContent}>
          <Image source={{ uri: selectedProducer.image }} style={styles.producerProfileImage} />
          <View style={styles.detailHeader}>
            <Text style={styles.detailName}>{selectedProducer.name}</Text>
            <Text style={styles.detailOrigin}>{selectedProducer.location}</Text>
            <Text style={styles.detailDescription}>{selectedProducer.history}</Text>
            <Text style={styles.producerContact}>Contato: {selectedProducer.contact}</Text>
          </View>

          <Text style={styles.reviewsTitle}>Produtos Certificados deste Produtor</Text>
          {producerProducts.length > 0 ? (
            producerProducts.map((product, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productCardSmall}
                onPress={() => {
                  setSelectedProduct(product);
                  setCurrentScreen('ProductDetail');
                }}
              >
                <Image source={{ uri: product.image }} style={styles.productImageSmall} />
                <Text style={styles.productNameSmall}>{product.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noReviewsText}>Nenhum produto certificado ainda.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  };

  switch (currentScreen) {
    case 'ProductDetail':
      return <ProductDetailScreen />;
    case 'ProducerProfile':
      return <ProducerProfileScreen />;
    default:
      return <HomeScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Bege Colonial
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50', // Verde para o Selo
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#EEE',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#E0E0B8',
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  horizontalList: {
    paddingHorizontal: 10,
  },
  productCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productOrigin: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  certificationStatus: {
    fontSize: 10,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 5,
  },
  producerCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },
  producerImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  producerInfo: {
    padding: 10,
    alignItems: 'center',
  },
  producerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  producerLocation: {
    fontSize: 12,
    color: '#666',
  },
  // Product Detail Styles
  backButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailContent: {
    padding: 15,
  },
  detailImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  detailHeader: {
    marginBottom: 15,
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  detailOrigin: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  detailCertification: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  detailDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  producerLink: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    marginBottom: 15,
  },
  producerLinkText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  reviewUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewComment: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
    marginTop: 5,
  },
  noReviewsText: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
  },
  // Star Rating
  starContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  filledStar: {
    color: '#FFD700',
    fontSize: 18,
  },
  emptyStar: {
    color: '#CCC',
    fontSize: 18,
  },
  // Producer Profile Styles
  producerProfileImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  producerContact: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  productCardSmall: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  productImageSmall: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  productNameSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
