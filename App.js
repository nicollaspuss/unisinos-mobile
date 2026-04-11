import React, { useState } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProducerProfileScreen from './src/screens/ProducerProfileScreen';
import { COLORS } from './src/styles/theme';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducer, setSelectedProducer] = useState(null);

  const navigate = (screen, data = null) => {
    if (screen === 'ProductDetail') setSelectedProduct(data);
    if (screen === 'ProducerProfile') setSelectedProducer(data);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'ProductDetail':
        return (
          <ProductDetailScreen 
            product={selectedProduct} 
            onBack={() => setCurrentScreen('Home')} 
            onNavigate={navigate} 
          />
        );
      case 'ProducerProfile':
        return (
          <ProducerProfileScreen 
            producer={selectedProducer} 
            onBack={() => setCurrentScreen('Home')} 
            onNavigate={navigate} 
          />
        );
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        {renderScreen()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});