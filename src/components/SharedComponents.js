import { View, Text, StyleSheet } from 'react-native';

export const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text key={i} style={i <= rating ? styles.filledStar : styles.emptyStar}>★</Text>
    );
  }
  return <View style={styles.starContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  starContainer: { flexDirection: 'row', marginBottom: 5 },
  filledStar: { color: '#FFD700', fontSize: 18 },
  emptyStar: { color: '#CCC', fontSize: 18 },
});