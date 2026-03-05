import React, {use, useState} from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from "./SearchBar";

const MOCK_DATA = [
  { id: '101', nome: 'Engrenagem Helicoidal M4', categoria: 'Transmissão' },
  { id: '102', nome: 'Parafuso Sextavado 10mm', categoria: 'Fixação' },
  { id: '103', nome: 'Correia Dentada 500XL', categoria: 'Transmissão' },
  { id: '104', nome: 'Rolamento Esférico 6204', categoria: 'Eixo' },
];

export default function PartFinder(){

    const [searchText, setSearchText] = useState('');

    const pecasFiltradas = MOCK_DATA.filter(peca => 
        peca.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    
    return(
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.headerTitle}>Buscar Peças</Text>
            <SearchBar
                value={searchText}
                onChangeText={setSearchText}
            />
            <Text style={styles.headerTitle}>Resultados</Text>
            <FlatList
                data={pecasFiltradas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemCard}>
                        <Text style={styles.itemTitle}>{item.nome}</Text>
                        <Text style={styles.itemSub}>{item.categoria} - ID: {item.id}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma peça encontrada.</Text>
                }
            />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  itemCard: {
    backgroundColor: '#FFF',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemSub: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
    fontSize: 16,
  }
});