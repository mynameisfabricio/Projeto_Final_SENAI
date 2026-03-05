import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TextInput } from 'react-native';
import { partService } from '../services/partService';
import PartCard from '../components/PartCard';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
  const parts = partService.getParts();

  const [search, setSearch] = useState('');

  const filteredParts = parts.filter(part =>
    part.name.toLowerCase().includes(search.toLowerCase())
  );

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
        <Text style={styles.subtitle}>
          {filteredParts.length} peças disponíveis
        </Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Buscar peça..."
        placeholderTextColor={colors.textSecondary}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredParts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    padding: 24,
    paddingBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.text,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },

  search: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

});

export default HomeScreen;