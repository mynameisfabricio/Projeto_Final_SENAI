import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

const DetailsScreen = ({ route, navigation }) => {
  const { part } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Ionicons name="construct-outline" size={32} color={colors.primary} />
        <Text style={styles.title}>{part.name}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Categoria</Text>
        <Text style={styles.info}>{part.category}</Text>

        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.info}>{part.description}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: 10,
  },

  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 30,
  },

  label: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 10,
  },

  info: {
    fontSize: 16,
    color: colors.text,
    marginTop: 3,
    lineHeight: 22,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default DetailsScreen;