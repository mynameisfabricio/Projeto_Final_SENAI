import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { partService } from '../services/partService';
import PartCard from '../components/PartCard';

const HomeScreen = ({ navigation }) => {
  const parts = partService.getParts();

  const renderItem = ({ item }) => (
    <PartCard
      part={item}
      onPress={() => navigation.navigate('Details', { part: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Catálogo de Peças</Text>
        <Text style={styles.subtitle}>Selecione uma peça para detalhes</Text>
      </View>
      <FlatList
        data={parts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1D1D1F',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#86868B',
    marginTop: 4,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});

export default HomeScreen;

