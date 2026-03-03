import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const PartCard = ({ part, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View>
                <Text style={styles.name}>{part.name}</Text>
                <Text style={styles.category}>{part.category}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1D1D1F',
    },
    category: {
        fontSize: 14,
        color: '#86868B',
        marginTop: 4,
    },
    arrow: {
        fontSize: 24,
        color: '#C7C7CC',
        fontWeight: '300',
    },
});

export default PartCard;
