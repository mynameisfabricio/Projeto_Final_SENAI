import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { baseURL } from '../services/Api';
import colors from '../theme/colors';

const PartCard = ({ part, onPress }) => {
  const imageUrl = `${baseURL}${part.imagem}`;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >

      <View style={styles.left}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>{part.nome}</Text>
          <Text style={styles.category}>{part.categoria}</Text>
          <Text style={styles.price}>R$ {part.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={24} color={colors.primary} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 14,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 14,

    borderWidth: 1,
    borderColor: colors.border,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: colors.surface,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },

  category: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 4,
  },

});

export default PartCard;
