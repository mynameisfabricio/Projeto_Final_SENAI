import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
import Api from '../services/Api';
import PartCard from '../components/PartCard';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }){

  const [busca, setBusca] = useState('')
  const [catalogo, setCatalogo] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const buscarAPI = async () => {
    setLoading(true)

    try{
      const response = await Api.get(`/api`)
      // salvando Api
      // console.log(response) -> 200 :)
      setCatalogo(response.data.catalogo)
    } 
    catch(error) {
      setError(true)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // instanciando a função para buscar itens
    buscarAPI()
  }, [])
  
  if (loading) return <ActivityIndicator size={'large'} color='#0783f7' />
  if (error) return <Text>Erro ao carregar itens</Text>
  
  const filteredParts = catalogo.filter(part =>
    part.nome.toLowerCase().includes(busca.toLowerCase())
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
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filteredParts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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

