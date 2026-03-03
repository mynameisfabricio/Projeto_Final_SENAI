import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
    const { part } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estrutura de Detalhes</Text>
            <Text style={styles.info}>Nome: {part.name}</Text>
            <Text style={styles.info}>Descrição: {part.description}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default DetailsScreen;


