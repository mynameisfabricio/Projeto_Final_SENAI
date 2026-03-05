import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';

const PartCard = ({ part, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      
      <View style={styles.left}>
        <Ionicons
          name="construct-outline"
          size={24}
          color={colors.primary}
          style={styles.icon}
        />

        <View>
          <Text style={styles.name}>{part.name}</Text>
          <Text style={styles.category}>{part.category}</Text>
        </View>
      </View>

      <Ionicons name="chevron-forward" size={24} color={colors.primary} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.card,
    padding: 18,
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
  },

  icon: {
    marginRight: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },

  category: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 3,
  },

});

export default PartCard;