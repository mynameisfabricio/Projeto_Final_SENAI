import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';
import { baseURL } from '../services/Api';

const DetailsScreen = ({ route, navigation }) => {
  const { part } = route.params;
  const imageUrl = `${baseURL}${part.imagem}`;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{part.nome}</Text>
              <Text style={styles.category}>{part.categoria}</Text>
            </View>
            <Text style={styles.price}>R$ {part.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.label}>Tamanho / Especificação</Text>
            <View style={styles.infoRow}>
              <Ionicons name="resize-outline" size={20} color={colors.primary} />
              <Text style={styles.info}>{part.tamanho}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.description}>{part.descricao}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Código do Produto</Text>
            <Text style={styles.info}>{part.codigo}</Text>
          </View>

          {part.manual && (
            <View style={styles.section}>
              <Text style={styles.label}>Manual / Notas</Text>
              <Text style={styles.info}>{part.manual}</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Voltar ao Catálogo</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
  },

  image: {
    width: '100%',
    height: 300,
    backgroundColor: colors.card,
  },

  content: {
    padding: 24,
    marginTop: -20,
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  titleContainer: {
    flex: 1,
    marginRight: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },

  category: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 20,
  },

  section: {
    marginBottom: 24,
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  info: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 8,
  },

  description: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default DetailsScreen;
